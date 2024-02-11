'use strict';

import { hashMap } from "./hashMap.js";

let hashObject = hashMap();

let hashCode = hashObject.hash('testkey');

console.log(hashCode);