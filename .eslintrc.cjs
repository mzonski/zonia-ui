
const createReactPackageConfig = (path) => {
  return {
    files: [`${path}/**/*.ts`, `${path}/**/*.tsx`],
    parserOptions: {
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: [`./${path}/tsconfig.json`],
    },
    rules: {
      "default-case-last": "off",
      "import/no-extraneous-dependencies": "off",
      "react/destructuring-assignment": "off",
      "react/function-component-definition": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
    }
  };
};

const createStorybookReactPackageConfig = (path) => {
  return {
    files: [`${path}/**/__stories/*.@(ts|tsx)`, `${path}/**/*.stories.@(ts|tsx)`],
    parserOptions: {
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: [`./${path}/tsconfig.json`],
    },
    rules: {
      "@typescript-eslint/no-use-before-define": "off",
      "import/no-extraneous-dependencies": "off",
      "no-plusplus": "off",
      "react-refresh/only-export-components": "off",
      "react/destructuring-assignment": "off",
      "react/function-component-definition": "off",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
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
    createReactPackageConfig('app'),
    createReactPackageConfig('components'),
    createReactPackageConfig('core'),
    createStorybookReactPackageConfig('components'),
    createReactPackageConfig('theme'),
  ],
};

module.exports = config;

