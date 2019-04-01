const path = require('path');
const spawn = require('cross-spawn');
const yargs = require('yargs');
const bootstrapYargs = require('./yargs/bootstrap');

function handleSignal(script, result) {
  if (result.signal === 'SIGKILL') {
    console.log(
      `The script "${script}" failed because the process exited too early. ` +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.'
    );
  } else if (result.signal === 'SIGTERM') {
    console.log(
      `The script "${script}" failed because the process exited too early. ` +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.'
    );
  }
  process.exit(1);
}

function attemptResolve(...resolveArgs) {
  try {
    return require.resolve(...resolveArgs);
  } catch (error) {
    return null;
  }
}

function execute(command) {
  const [executor, , , ...args] = process.argv;
  const relativeScriptPath = path.join(__dirname, './scripts', command);
  const scriptPath = attemptResolve(relativeScriptPath);

  if (!scriptPath) throw new Error(`Unknown command "${command}".`);

  const result = spawn.sync(executor, [scriptPath, ...args], {
    stdio: 'inherit',
    env: process.env,
  });

  if (result.signal) handleSignal(result);
  else process.exit(result.status);
}

yargs
  .command(
    'init',
    'Set up your local development workflow with eslint, prettier, etc.',
    bootstrapYargs,
    () => execute('bootstrap')
  )
  .command('lint [...lint options]', 'Run linting.', () => execute('lint'))
  .showHelpOnFail(true)
  .demandCommand(1, '')
  .help()
  .version();

const registeredCommands = yargs.getCommandInstance().getCommands();
const currentCommand = yargs.argv._[0];

if (!registeredCommands.includes(currentCommand)) {
  yargs.showHelp();
  process.exit(1);
}
