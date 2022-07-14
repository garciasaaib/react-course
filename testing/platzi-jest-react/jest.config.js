module.exports = {
  verbose: true,
  // collectCoverage: true,
  setupFilesAfterEnv: [
    '<rootDir>/src/__test__/setupTest.js',
  ],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
};
