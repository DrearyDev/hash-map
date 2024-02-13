'use strict';

import { hashMap } from "./hashMap.js";
import { hashSet } from './hashSet.js';


let test = hashSet();

console.log(test.hash('testvalue'));

test.set('test');

test.set('test2');

test.set('test3');

test.set('tessss');

test.set('another');

test.set('test');//overwrites original

console.log(test.has('another'));

console.log('----------');

console.log(test.remove('another'));

console.log(test.remove('another'));

console.log(test.length());

test.clear();//removes everything

console.log(test.length());

test.set('key1')

test.set('key2')

test.set('key3')

test.set('key4')

test.set('test3')

test.set('tessss')

console.log(test.keys());
