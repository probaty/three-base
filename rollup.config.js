import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.ts",
    plugins: [terser(), typescript()],
    external: ["three", "three/examples/jsm/controls/OrbitControls"],
    output: {
      file: "dist/index.module.js",
      format: "esm",
    },
  },
  {
    input: "src/index.ts",
    plugins: [terser(), typescript()],
    external: ["three", "three/examples/jsm/controls/OrbitControls"],
    output: {
      file: "dist/index.module.cjs",
      format: "cjs",
    },
  },
];
