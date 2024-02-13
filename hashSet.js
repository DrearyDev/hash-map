'use strict';

import { linkedList } from "./linkedList.js";

function hashSet() {
    let table = new Array(16);
    let capacity = 0;
    let loadFactor = 0.75;

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };

        return hashCode;
    };

    const set = (key) => {
        let hashCode = hash(key);

        if (table[hashCode % table.length]) {
            let linkedListLength = table[hashCode % table.length].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = table[hashCode % table.length].at(i).value;

                //dont add it if it already exists
                if (linkedKey === key) { return };
            };

            table[hashCode % table.length].append(key);

        } else {
            capacity++;

            let linked = linkedList();
            linked.append(key);

            table[hashCode % table.length] = linked;
        };

        console.log(table[hashCode % table.length].toString());
    };

    const has = (key) => {
        let hashCode = hash(key);

        if (table[hashCode % table.length]) {
            let linkedListLength = table[hashCode % table.length].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = table[hashCode % table.length].at(i).value;

                if (linkedKey === key) { return true };
            };
        };

        return false;
    };

    const remove = (key) => {
        let hashCode = hash(key);

        if (table[hashCode % table.length]) {
            let linkedListLength = table[hashCode % table.length].getSize();

            if (linkedListLength === 1) {
                delete table[hashCode % table.length];
                return true;
            };

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = table[hashCode % table.length].at(i).value;

                if (linkedKey === key) {
                    capacity--;
                    table[hashCode % table.length].removeAt(i);
                    return true;
                };
            };
        };

        return false;
    };



    return { hash, set, has, remove };
};

export { hashSet };