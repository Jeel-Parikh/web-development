// .mjs extension is used when we are not able to require file basically in ESM modual
// This is not working in browser so you can try this running by node

import { franc, francAll } from 'franc'
import langs from 'langs'
let lancode=franc("hello jeel, Good morning. I am jerry from ahmedabad.")
console.log(lancode)
console.log(langs.where('3', `${lancode}`).name)