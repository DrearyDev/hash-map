'use strict';

function hashMap() {
    let table = new Array(16);

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };

        return hashCode;
    };

    const set = (key, value) => {
        let hashCode = hash(key);

        table[hashCode % table.length] = value;
        console.log(table);
    };

    return { hash, set };
};

export { hashMap };