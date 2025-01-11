const babelParser = require("@babel/eslint-parser");
const reactPlugin = require("eslint-plugin-react");

module.exports = [
  {
    // Linting 대상 파일을 적어줘요.
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      // ESLint 기본 parser는 ES5 기준이기 때문에, ES6 또는 ESModule 문법을 사용하기 위해서는 @babel/eslint-parser 패키지를 다운로드 해야 해요.
      parser: babelParser,
      parserOptions: {
        sourceType: "module", // 소스 코드에서 ESModule을 사용하고 있다고 알려줘요.
        requireConfigFile: false, // 별도의 babel 설정 파일을 사용하지 않겠다는 설정이에요.
        ecmaFeatures: {
          jsx: true, // JSX 문법을 해석할 수 있게 하는 설정이에요.
        },
        ecmaVersion: 2015, // 해석할 ES 버전을 명시해요.
        babelOptions: {
          // ESLint도 JSX를 해석하지 못하기 때문에 @babel/preset-react 설치를 통한 트랜스파일링이 필요해요.
          presets: ["@babel/preset-react"],
        },
      },
    },
    // 여러가지 플러그인을 통해 설정을 편하게 관리할 수 있어요.
    plugins: {
      react: reactPlugin, // React에서 자주 사용되는 규칙 모음을 추가해요.
    },
    // 구체적으로 규칙을 추가하거나 수정할 수 있어요.
    rules: {
      "no-undef": "off", // 정의되지 않은 변수에 대한 경고를 발생시키지 않도록 설정해요.
      "no-console": "warn", // console.log를 호출하는 코드에 대해 경고를 발생시키도록 설정해요.
      "no-unused-vars": "warn", // 사용하지 않은 변수가 있다면 오류를 발생시키도록 설정해요.
    },
    settings: {
      react: {
        version: "detect", // 사용 중인 React 버전을 자동으로 감지하도록 설정해요.
      },
    },
  },
];