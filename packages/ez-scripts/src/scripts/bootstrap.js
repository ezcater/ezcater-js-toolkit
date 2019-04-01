const {resolve} = require('path');
const yargs = require('yargs');
const {asyncSpawn} = require('../utils');
const bootstrapYargs = require('../yargs/bootstrap');

const {argv} = bootstrapYargs(yargs);

function copyBootstrapFiles(appPath, sourcePath) {
  const cmd = 'cp';
  const filesToCopy = [
    ...(argv.eslint || argv.all ? ['.eslintrc.js', '.eslintignore'] : []),
    ...(argv.prettier || argv.all ? ['.prettierrc.js', '.prettierignore'] : []),
  ];
  const args = ['-r', ...filesToCopy.map(file => resolve(sourcePath, file)), `${appPath}`];
  return asyncSpawn(cmd, args, {cwd: appPath});
}

const appPath = argv.targetDir || resolve(process.cwd());
const filesPath = resolve(__dirname, '../files');

(async function run() {
  try {
    await copyBootstrapFiles(appPath, filesPath);
  } catch (err) {
    process.exit(1);
  }
})();
