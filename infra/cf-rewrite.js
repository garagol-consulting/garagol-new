// CloudFront Function (viewer-request, runtime cloudfront-js-2.0).
// Maps clean URLs to the per-route prerendered HTML produced by vite-react-ssg
// (flat style: /services -> /services.html, /work/ignify -> /work/ignify.html).
// Files with an extension (assets, sitemap.xml, robots.txt, llms.txt) and the
// root "/" pass through untouched.
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri === '/' || uri.indexOf('.') !== -1) {
    return request;
  }
  if (uri.endsWith('/')) {
    request.uri = uri.slice(0, -1) + '.html';
  } else {
    request.uri = uri + '.html';
  }
  return request;
}
