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
    };

    const get = (key) => {
        let hashCode = hash(key);

        return table[hashCode % table.length] ?? null;
    };

    const has = (key) => {
        let hashCode = hash(key);

        return !!(table[hashCode % table.length]);
    };

    const remove = (key) => {
        let hashCode = hash(key);

        if (table[hashCode % table.length]) {
            delete table[hashCode % table.length];
            return true;
        };

        return false;
    };

    const length = () => {
        let count = 0;

        for (let i in table) {
            if (table[i]) { count++ };
        };

        return count;
    };

    return { hash, set, get, has, remove, length };
};

export { hashMap };