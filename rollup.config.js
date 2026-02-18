import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
import commonjs from "@rollup/plugin-commonjs"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"
import replace from "@rollup/plugin-replace"
import { readFileSync } from "fs"

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"))

const env = process.env.NODE_ENV || "dev"
const typescriptPlugin = typescript({
  tsconfigOverride: {
    compilerOptions: {
      declaration: env === "production",
      declarationDir: env === "production" ? "dist/types" : undefined,
      rootDir: env === "production" ? "src" : ".",
    },
    include: env === "production" ? ["src/**/*"] : ["src/**/*", "examples/**/*"],
    exclude: ["node_modules", "dist"],
  },
})
const replaceEnvPlugin = replace({
  preventAssignment: true,
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
        globals: {
          react: "React",
          "unsplash-js": "unsplashJs",
        },
      },
      external: ["react", "unsplash-js"],
      plugins: [resolve({ preferBuiltins: false }), replaceEnvPlugin, typescriptPlugin, commonjs()],
    },
    {
      input: pkg.source,
      output: [
        { file: pkg.main, format: "cjs" },
        { file: pkg.module, format: "es" },
      ],
      external: ["react", "unsplash-js", "intersection-observer"],
      plugins: [typescriptPlugin],
    },
  ]
} else {
  config = {
    input: "examples/index.tsx",
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
        preventAssignment: true,
        "process.env.UNSPLASH_ACCESS_KEY": JSON.stringify(process.env.UNSPLASH_ACCESS_KEY),
      }),
      typescriptPlugin,
      commonjs(),
      serve("examples"),
      livereload("examples"),
    ],
  }
}

export default config
