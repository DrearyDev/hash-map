'use strict';

import { hashMap } from "./hashMap.js";

let hashObject = hashMap();

hashObject.set('key', 'value');

console.log(hashObject.get('key'));