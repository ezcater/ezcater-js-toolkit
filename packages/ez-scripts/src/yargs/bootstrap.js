const coerce = val => (val === true ? 'base' : val);

module.exports = yrgs =>
  yrgs
    .option('eslint', {
      desc: 'Write the eslint config.',
      coerce,
    })
    .option('prettier', {
      desc: 'Write the prettier config.',
      coerce,
    })
    .option('targetDir', {
      default: process.cwd(),
      desc: 'Directory to write configs to.',
      type: 'string',
    })
    .option('all', {
      default: false,
      desc: 'Write all base configurations.',
      type: 'boolean',
    });
