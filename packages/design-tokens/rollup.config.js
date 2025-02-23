import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import filesize from "rollup-plugin-filesize";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS 출력
      exports: "auto",
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Module 출력
    },
  ],
  plugins: [
    resolve(), //node_modules 지원
    commonjs(), // rollup은 cjs 패키지를 해석할 수 없음
    typescript({ tsconfig: "./tsconfig.json" }), // 타입스크립트 변환
    postcss({
      extract: true, // CSS를 별도 파일로 추출 (dist/index.css)
      minimize: true, // CSS Minify
      sourceMap: true,
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    terser(), // 번들 파일 압축 및 코드 난독화
    filesize(), // 번들 크기 출력을 위함
  ],
};
