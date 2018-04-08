import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"
import replace from "rollup-plugin-replace"
import pkg from "./package.json"

const env = process.env.NODE_ENV || "dev"
const babelPlugin = babel({ exclude: "node_modules/**" })
const replaceEnvPlugin = replace({
  "process.env.NODE_ENV": JSON.stringify(env),
})

let config = null

if (env === "production") {
  config = [
    {
      input: pkg.source,
      output: {
        name: "UnsplashReact",
        file: pkg["umd:main"],
        format: "umd",
      },
      plugins: [resolve({ preferBuiltins: false }), replaceEnvPlugin, babelPlugin, commonjs()],
    },
    {
      input: "src/index.js",
      output: [{ file: pkg.main, format: "cjs" }, { file: pkg.module, format: "es" }],
      plugins: [babelPlugin],
    },
  ]
} else {
  config = {
    input: "examples/index.js",
    output: {
      name: "UnsplashReactExample",
      file: "examples/build.js",
      format: "umd",
      sourcemap: "inline",
    },
    plugins: [
      resolve({ preferBuiltins: false }),
      replaceEnvPlugin,
      replace({
        "process.env.UNSPLASH_ACCESS_KEY": JSON.stringify(process.env.UNSPLASH_ACCESS_KEY),
      }),
      babelPlugin,
      commonjs(),
      serve("examples"),
      livereload("examples"),
    ],
  }
}

export default config
