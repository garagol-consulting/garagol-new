#!/usr/bin/env bash
# Build the prerendered (SSG) Garagol site and deploy to S3 + invalidate CloudFront.
# Clean URLs (/services -> services.html) are handled by the CloudFront function
# "garagol-clean-urls" (viewer-request), already attached to the distribution.
set -euo pipefail

PROFILE=ignify-personal
BUCKET=garagol-site-347785022070
DIST_ID=E3FC8IK5IZB8G2
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

echo "Building (vite-react-ssg prerender)…"
npm run build

echo "Syncing hashed assets (immutable, 1y)…"
aws s3 sync dist/assets "s3://$BUCKET/assets" --delete \
  --cache-control "public,max-age=31536000,immutable" --profile "$PROFILE"

echo "Syncing HTML + sitemap/robots/llms (short cache)…"
aws s3 sync dist "s3://$BUCKET" --delete --exclude "assets/*" \
  --cache-control "public,max-age=300,must-revalidate" --profile "$PROFILE"

echo "Invalidating CloudFront…"
aws cloudfront create-invalidation --profile "$PROFILE" \
  --distribution-id "$DIST_ID" --paths "/*" --query "Invalidation.Status" --output text

echo "Done. https://garagol.com"
