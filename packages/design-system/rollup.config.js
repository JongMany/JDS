import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import filesize from 'rollup-plugin-filesize';
import path from 'path';
import alias from '@rollup/plugin-alias';
import { fileURLToPath } from 'url';
import babel from '@rollup/plugin-babel';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function addUseClient() {
  return {
    name: 'add-use-client', // 플러그인 이름
    renderChunk(code) {
      return `"use client";\n${code}`; // 최상단에 "use client" 추가
    },
  };
}

function mergeStyles({ name }) {
  return name?.replace(/(?:.+\/)?([^\/]+)\.css\.ts\.vanilla\.css$/, '$1.css');
}

export default {
  input: 'src/index.ts', // 진입점
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS 출력
      exports: 'auto',
      assetFileNames: mergeStyles,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module 출력
      assetFileNames: mergeStyles,
    },
  ],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.join(__dirname, './src') }],
    }),
    peerDepsExternal(),
    resolve(), // node_modules 확인
    commonjs(), // CommonJS 변환
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
      exclude: [
        'node_modules',
        '**/*.stories.css.ts',
        '**/*.stories.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],
    }), // 타입스크립트 변환
    vanillaExtractPlugin(),
    terser(), // 코드 압축
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    filesize(),
    addUseClient(),
  ],
};
