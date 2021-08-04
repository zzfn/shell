#!/usr/bin/env zx

// try {
//     const a=await $`npm list -g --depth=0 --json`
//     a.toString()
//     console.log(chalk.blue())
// } catch (p) {
//     console.log(`Exit code: ${p.exitCode}`)
//     console.log(`Error: ${p.stderr}`)
// }

const execa = require("execa")
execa('/usr/local/opt/node@14/bin/npm',['list', '-g', '--depth=0', '--json']).then(result => {
    console.log(result.stdout);
    //=> 'hello world'
});
