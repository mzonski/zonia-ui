
const createReactPackageConfig = (path) => {
  return {
    files: [`${path}/**/*.ts`, `${path}/**/*.tsx`],
    parserOptions: {
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: [`./${path}/tsconfig.json`],
    },
    rules: {
      "import/no-extraneous-dependencies": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "react/destructuring-assignment": "off",
      "default-case-last": "off",
    }
  };
};

const createStorybookReactPackageConfig = (path) => {
  return {
    files: [`${path}/**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)`],
    parserOptions: {
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: [`./${path}/tsconfig.json`],
    },
    rules: {
      "react/jsx-props-no-spreading": "off",
      "react/destructuring-assignment": "off",
      "react/function-component-definition": "off",
      "import/no-extraneous-dependencies": "off",
      "no-plusplus": "off",
      "react-refresh/only-export-components": "off",
    }
  };
};

const config = {
  root: true,
  plugins: ['zonia'],
  extends: ['plugin:zonia/react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    createReactPackageConfig('components'),
    createStorybookReactPackageConfig('components'),
    createReactPackageConfig('theme'),
  ],
};

module.exports = config;
