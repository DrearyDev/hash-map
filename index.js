'use strict';

import { hashMap } from "./hashMap.js";
import { hashSet } from './hashSet.js';


let test = hashSet();

console.log(test.hash('testvalue'));