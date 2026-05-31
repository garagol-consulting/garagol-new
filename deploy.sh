#!/usr/bin/env bash
# Build the Garagol React site and deploy it to S3 + invalidate CloudFront.
# Usage:  bash deploy.sh
set -euo pipefail

PROFILE=ignify-personal
BUCKET=garagol-site-347785022070
DIST_ID=E3FC8IK5IZB8G2
DIR="$(cd "$(dirname "$0")" && pwd)"

cd "$DIR"
echo "Building…"
npm run build

echo "Syncing dist/ -> s3://$BUCKET …"
aws s3 sync dist "s3://$BUCKET" --delete --profile "$PROFILE"

echo "Invalidating CloudFront ($DIST_ID) …"
aws cloudfront create-invalidation --profile "$PROFILE" \
  --distribution-id "$DIST_ID" --paths "/*" --query "Invalidation.Status" --output text

echo "Done. Live at https://garagol.com (SPA deep links via the 403→/index.html rule)."
