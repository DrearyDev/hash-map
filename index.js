'use strict';

import { hashMap } from "./hashMap.js";

let hashObject = hashMap();

hashObject.set('key', 'value');

console.log(hashObject.get('key'));

console.log(hashObject.has('key'));

console.log(hashObject.remove('key'));

console.log(hashObject.has('key'));

hashObject.set('differentKey', 'differentValue');

console.log(hashObject.length());

hashObject.clear();

console.log(hashObject.length());

hashObject.set('kid', 'vvoom');
hashObject.set('kasdf', 'jooojo');
hashObject.set('jhon', 'vendetta');
hashObject.set('kyle', 'bobcat');
hashObject.set('bob', 'style');
hashObject.set('cartman', 'crazy');

console.log(hashObject.keys());

