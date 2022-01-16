// @ts-check
describe('utils', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterAll(() => {
    jest.resetModules();
  });

  describe('hasPkgProp', () => {
    describe('when prop exists in package.json', () => {
      it('returns true', () => {
        const readPkgUp = require('read-pkg-up');
        jest.spyOn(readPkgUp, 'sync').mockReturnValue({
          packageJson: {
            dependencies: {},
            eslintConfig: {plugins: ['react']},
          },
          path: '/',
        });
        const utils = require('../utils');

        expect(utils.hasPkgProp('eslintConfig')).toBe(true);
      });
    });

    describe('when prop does not exist in package.json', () => {
      it('returns false', () => {
        const readPkgUp = require('read-pkg-up');
        jest.spyOn(readPkgUp, 'sync').mockReturnValue({
          packageJson: {
            dependencies: {},
            eslintIgnore: [],
          },
          path: '/',
        });
        const utils = require('../utils');

        expect(utils.hasPkgProp('eslintConfig')).toBe(false);
      });
    });
  });
});
