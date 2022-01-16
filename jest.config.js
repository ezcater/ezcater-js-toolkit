// @ts-check
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  projects: ['<rootDir>/packages/*'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
};
