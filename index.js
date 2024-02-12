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

// hashObject.remove('kid');

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

hashObject.set('asdf', 'test')

hashObject.set('vim', 'not test')

hashObject.set('vnvnm,', 'not test')

hashObject.set('diw', 'not test')

hashObject.set('kljlk', 'not test')

hashObject.set('zzfkdjz', 'not test')

hashObject.set('nm,,b', 'not test')

hashObject.set('styellksd', 'not test')

hashObject.set('hash', 'not test')

hashObject.set('table', 'not test')

hashObject.set('collisions', 'not test')

hashObject.set('cant figure it out', 'not test')

hashObject.set('unique key with same old value', 'not test')

hashObject.set('ey with ame old vale', 'no test')

hashObject.set('keyw', 'valuew')

hashObject.set('heehre', 'not test')

hashObject.set('nvbvbbvbbvbbvbbv', 'not test')

hashObject.set('tetetetetete', 'not test')

hashObject.set('zuzuzuzuzuzuzl', 'not test')

hashObject.set('vnbvvbmnczxbvmcnbcvmn', 'not test')

hashObject.set('linked list', 'not test')

hashObject.set('help fight against collisions... donate today!!!', 'not test')

hashObject.set('me', 'tdddest')

hashObject.set('pdfdflist', 'ptdddest')

hashObject.set('uniqueword', 'ptddvdest')

hashObject.set('pdfppppvdflist', 'ptddvdppppppest')

hashObject.set('music', 'dsjkhfsadkjfha')

hashObject.set('stop', 'kldfsjdflk')

hashObject.set('go', 'fdsajlk')

hashObject.set('abcdefg', 'hijklmnop')

hashObject.set('qrstuv', 'wxyz')

hashObject.set('capacity', 'wxyz')

hashObject.set('overload', 'wxyz')

hashObject.set('avcdef', 'wxyz')


console.log(hashObject.length());
console.log(hashObject.entries());