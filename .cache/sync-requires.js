const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-jsx": hot(preferDefault(require("/Users/danbarbarito/Projects/barbaritome/src/templates/blog-post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danbarbarito/Projects/barbaritome/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/danbarbarito/Projects/barbaritome/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/danbarbarito/Projects/barbaritome/src/pages/index.jsx")))
}

