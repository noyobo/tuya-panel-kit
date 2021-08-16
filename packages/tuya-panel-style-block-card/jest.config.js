const base = require('../../jest.config.base.js');
const pkg = require('./package');

module.exports = {
  ...base,
  name: pkg.name,
  displayName: pkg.name,
  rootDir: '../..',
  testMatch: ['<rootDir>/packages/tuya-panel-style-block-card/src/__tests__/?(*.)+(test).js'],
  coverageDirectory: '<rootDir>/packages/tuya-panel-style-block-card/coverage/',
  collectCoverageFrom: ['<rootDir>/packages/tuya-panel-style-block-card/src/index.tsx'],
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/demos',
    '<rootDir>/example',
    '<rootDir>/lib',
    '<rootDir>/packages/*/lib',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
};