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
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % table.length;
        };

        return hashCode;
    };

    const growTable = () => {
        capacity = 0;
        let keysArray = keys();
        table = new Array(table.length * 2);

        for (let i in keysArray) { set(keysArray[i]) };
    };

    const set = (key) => {
        let hashCode = hash(key);

        if (table[hashCode]) {
            let linkedListLength = table[hashCode].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = table[hashCode].at(i).value;

                //dont add it if it already exists
                if (linkedKey === key) { return };
            };

            table[hashCode].append(key);

        } else {
            capacity++;

            let linked = linkedList();
            linked.append(key);

            table[hashCode] = linked;
        };

        if (capacity >= (table.length * loadFactor)) { growTable() };
    };

    const has = (key) => {
        let hashCode = hash(key);

        if (table[hashCode]) {
            let linkedListLength = table[hashCode].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = table[hashCode].at(i).value;

                if (linkedKey === key) { return true };
            };
        };

        return false;
    };

    const remove = (key) => {
        let hashCode = hash(key);

        if (table[hashCode]) {
            let linkedListLength = table[hashCode].getSize();

            if (linkedListLength === 1) {
                delete table[hashCode];
                return true;
            };

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = table[hashCode].at(i).value;

                if (linkedKey === key) {
                    capacity--;
                    table[hashCode].removeAt(i);
                    return true;
                };
            };
        };

        return false;
    };

    const length = () => {
        let count = 0;

        for (let i in table) {
            if (table[i]) {
                console.log(table[i].toString());
                let linkedListLength = table[i].getSize();

                for (let k = 0; k < linkedListLength; k++) {
                    count++;
                };
            };
        };

        return count;
    };

    const clear = () => {
        table = new Array(16);
    };

    const keys = () => {
        let keys = [];

        for (let i in table) {
            if (table[i]) {
                let linkedListLength = table[i].getSize();

                for (let k = 0; k < linkedListLength; k++) {
                    keys.push(table[i].at(k).value);
                };
            };
        };

        return keys;
    };

    return { hash, set, has, remove, length, clear, keys };
};

export { hashSet };