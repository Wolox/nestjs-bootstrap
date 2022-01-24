/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
    '!src/main.ts',
    '!src/common/**/*.ts',
    '!src/infrastructure/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['ts', 'json', 'js', 'node'],
  modulePaths: ['<rootDir>'],
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
