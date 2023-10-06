import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  plugins: [terser(), typescript()],
  output: {
    file: "dist/index.module.js",
    format: "esm",
  },
};
