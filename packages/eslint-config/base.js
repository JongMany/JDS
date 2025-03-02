import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';
import importPlugin from 'eslint-plugin-import';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      import: importPlugin,
      // '@typescript-eslint': ['@typescript-eslint/eslint-plugin'],
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            // 타입 import가 먼저 오도록 설정
            ['type'],
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always', // 그룹 간에 새로운 줄 추가
          alphabetize: {
            order: 'asc', // 알파벳 순으로 정렬
            caseInsensitive: true,
          },
        },
      ],
      // import type {} from ""으로 강제
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports', // 'import type'을 선호
          disallowTypeAnnotations: false, // 타입 어노테이션을 별도로 사용하는 것을 허용
        },
      ],
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
