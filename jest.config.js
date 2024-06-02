module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      '^.+\\.svg$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',  // Mock CSS modules
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
  };
  