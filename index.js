'use strict';

import { hashMap } from "./hashMap.js";

let hashObject = hashMap();

hashObject.set('key', 'value');

console.log(hashObject.get('key'));

console.log(hashObject.has('key'));

console.log(hashObject.remove('key'));

console.log(hashObject.has('key'));