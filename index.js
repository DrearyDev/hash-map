'use strict';

import { hashMap } from "./hashMap.js";

// hashObject.set('jhon', 'vendetta');
// hashObject.set('kyle', 'bobcat');
// hashObject.set('bob', 'style');
// hashObject.set('cartman', 'crazy');
// hashObject.set('kasdf', 'jooojo');

let hashObject = hashMap();

// hashObject.set('differentKey', 'differentValue');

// console.log('number of key-value pairs in table: ' + hashObject.length());

// console.log('clearing the table...');
// hashObject.clear();

// console.log('number of key-value pairs in table: ' + hashObject.length());

hashObject.set('kid', 'vvoom');
hashObject.set('cat', 'vanessa');
hashObject.set('kid', 'no more vvoom');// key exist so value will be updated

console.log(hashObject.get('kid'));

console.log(hashObject.has('kid'));

console.log(hashObject.remove('cat'));

hashObject.set('cat', 're-added-cat');

hashObject.set('not-a-cat', '-meow-');

console.log(hashObject.length());


console.log(hashObject.keys());

console.log(hashObject.values());

console.log(hashObject.entries());


