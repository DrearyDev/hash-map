'use strict';

import { hashMap } from "./hashMap.js";
import { hashSet } from './hashSet.js';


let test = hashSet();

console.log(test.hash('testvalue'));

test.set('test');

test.set('another');

test.set('test');//overwrites original

console.log(test.has('another'));

console.log('----------');

console.log(test.remove('another'));

console.log(test.remove('another'));
