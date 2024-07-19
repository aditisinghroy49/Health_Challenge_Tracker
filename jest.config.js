module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
  },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  coverageReporters: ['html', 'text'],
  collectCoverage: true,
  coverageDirectory: 'coverage/my-angular-app',
  testEnvironment: 'jsdom',
};
