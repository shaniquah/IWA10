// Built-in Objects

// Auto-boxing

const example = 3

console.log(example)

// Primitive types---strings/numbers/boolean/null/undefined/symbol
const  symbol = Symbol()
const obj = {

    [symbol]: 'Amazing'
} 

console.log(obj[symbol])

// Composite types--
const first = {myName: 'Niquah'}
const second = {myName: 'Niquah'}

console.log(first === second)
// different objects may have the same value but they are not the same

let one = {myAge: 21}
let two = one

console.log(one === two)
// different objects can only be same if one object is used as the value of another

// reassigning object property value using let
let onevar = {aName: 'Tshepi'}
console.log(onevar.aName)
onevar.aName = 'Otshepeng'
console.log(onevar)

// reassigning object property value using const
const othervar = {aName: 'Tshepi'}
console.log(othervar.aName)
othervar.aName = 'Otshepeng'
console.log(othervar)
// 