const { build } = require("ng-packagr");
const { join } = require("path");
const alias = require("@rollup/plugin-alias");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");

console.log("__dirname1122", __dirname);

build({
  project: join(__dirname, "ng-package.json"),
  rollupConfig: {
    input: join(__dirname, "src/public-api.ts"),
    output: {
      // Define your output options here
      format: 'es',
      dir: 'dist',
    },
    plugins: [
      alias({
        entries: [
          {
            find: "@Components",
            replacement: join(__dirname, "src/lib/shared/components"),
          },
          // Add more aliases if needed
        ],
      }),
      nodeResolve({
        extensions: [".js", ".ts"],
      }),
      commonjs(),
      typescript({
        tsconfig: join(__dirname, "tsconfig.lib.json"),
      }),
      // Add other Rollup plugins as necessary
    ],
    external: [
      // Specify external dependencies here
      "@angular/core",
      "@angular/common",
      // Add other externals as needed
    ],
  },
});