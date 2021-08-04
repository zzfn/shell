#!/usr/bin/env zx
console.log(11)
let count = parseInt(await $`ls -1 | wc -l`)
console.log(`Files count: ${count}`)
// let bear = await question('What kind of bear is best? ')
// let token = await question('Choose env variable: ', {
//     choices: Object.keys({a:1,b:2,c:3})
// })
