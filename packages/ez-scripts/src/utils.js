const fs = require('fs');
const path = require('path');
const has = require('lodash.has');
const readPkgUp = require('read-pkg-up');
const which = require('which');

const {pkg, path: pkgPath} = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});
const appDirectory = path.dirname(pkgPath);

function resolveBin(modName, {executable = modName, cwd = process.cwd()} = {}) {
  let pathFromWhich;
  try {
    pathFromWhich = fs.realpathSync(which.sync(executable));
  } catch (_error) {
    // ignore _error
  }
  try {
    const modPkgPath = require.resolve(`${modName}/package.json`);
    const modPkgDir = path.dirname(modPkgPath);
    const {bin} = require(modPkgPath);
    const binPath = typeof bin === 'string' ? bin : bin[executable];
    const fullPathToBin = path.join(modPkgDir, binPath);
    if (fullPathToBin === pathFromWhich) return executable;
    return fullPathToBin.replace(cwd, '.');
  } catch (error) {
    if (pathFromWhich) return executable;
    throw error;
  }
}

const fromRoot = (...p) => path.join(appDirectory, ...p);
const hasFile = (...p) => fs.existsSync(fromRoot(...p));

const hasPkgProp = props => Array.from(props).some(prop => has(pkg, prop));

module.exports = {
  hasFile,
  hasPkgProp,
  resolveBin,
};
