const {resolve} = require('path');
const {promisify} = require('util');
const {writeFile} = require('fs');
const yargs = require('yargs');
const {asyncSpawn} = require('../utils');
const bootstrapYargs = require('../yargs/bootstrap');

const asyncWriteFile = promisify(writeFile);

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

async function updatePackageJson(appPath) {
  const filePath = resolve(appPath, 'package.json');
  const packageJson = require(filePath);

  const lintScripts = {
    lint: 'ez-scripts lint',
    'lint:fix': 'ez-scripts lint --fix',
  };

  const scripts = {
    ...(argv.eslint || argv.all ? lintScripts : {}),
  };

  if (Object.keys(scripts).length === 0) return Promise.resolve();

  const updatedPackageJson = {
    ...packageJson,
    scripts: {
      ...packageJson.scripts,
      ...scripts,
    },
  };

  const fileContent = `${JSON.stringify(updatedPackageJson, null, 2)}\n`;

  return asyncWriteFile(filePath, fileContent);
}

const appPath = argv.targetDir || resolve(process.cwd());
const filesPath = resolve(__dirname, '../files');

(async function run() {
  try {
    await copyBootstrapFiles(appPath, filesPath);
    await updatePackageJson(appPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
