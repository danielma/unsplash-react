// Verifies the CJS build is loadable as CommonJS.
// Fails with "ReferenceError: exports is not defined" if the package
// has "type": "module" but the CJS bundle uses a .js extension.
//
// intersection-observer is a browser polyfill; stub window/document so it
// doesn't crash when loaded outside a browser environment.
global.window = global
global.document = {}

const UnsplashReact = require("../dist/index.cjs")

console.assert(
  typeof UnsplashReact.default === "function",
  "default export should be a function"
)
console.log("CJS compat: OK")
