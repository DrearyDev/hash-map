'use strict';
import { linkedList } from "./linkedList.js";

function hashMap() {
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
        let keyValuePairs = entries();
        table = new Array(table.length * 2);

        for (let i in keyValuePairs) {
            set(keyValuePairs[i][0], keyValuePairs[i][1]);
        };
    };

    const set = (key, value) => {
        let hashCode = hash(key);

        if (table[hashCode]) {
            let linkedListLength = table[hashCode].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = Object.keys(table[hashCode].at(i).value)[0];

                if (linkedKey === key) {
                    table[hashCode].at(i).value[key] = value;
                    return;
                };
            };

            table[hashCode].append({[key]: value});

        } else {
            capacity++;//only count new buckets filled

            let linked = linkedList();
            linked.append({[key]: value});

            table[hashCode] = linked;
        };

        // check if table needs to grow
        console.log(capacity);
        if (capacity >= (table.length * loadFactor)) { growTable() };
    };

    const get = (key) => {
        let hashCode = hash(key);

        if (table[hashCode]) {
            let linkedListLength = table[hashCode].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = Object.keys(table[hashCode].at(i).value)[0];

                if (linkedKey === key) {
                    return table[hashCode].at(i).value[key];
                };
            };
        };

        return null;
    };

    const has = (key) => {
        let hashCode = hash(key);

        if (table[hashCode]) {
            let linkedListLength = table[hashCode].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = Object.keys(table[hashCode].at(i).value)[0];

                if (linkedKey === key) { return true };
            };
        };

        return false;
    };

    const remove = (key) => {
        let hashCode = hash(key);

        if (table[hashCode]) {
            let linkedListLength = table[hashCode].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = Object.keys(table[hashCode].at(i).value)[0];

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
                    let linkedKey = Object.keys(table[i].at(k).value)[0];

                    keys.push(linkedKey);
                };
            };
        };

        return keys;
    };

    const values = () => {
        let values = [];

        for (let i in table) {
            if (table[i]) {
                let linkedListLength = table[i].getSize();

                for (let k = 0; k < linkedListLength; k++) {
                    let linkedValue = Object.values(table[i].at(k).value)[0];

                    values.push(linkedValue);
                };
            };
        };

        return values;
    };

    const entries = () => {
        let entries = [];

        for (let i in table) {
            if (table[i]) {
                let linkedListLength = table[i].getSize();

                for (let k = 0; k < linkedListLength; k++) {
                    let linkedKey = Object.keys(table[i].at(k).value)[0];
                    let linkedValue = Object.values(table[i].at(k).value)[0];

                    entries.push([linkedKey, linkedValue]);
                };
            };
        };

        return entries;
    };

    return { hash, set, get, has, remove, length, clear, keys, values, entries };
};

export { hashMap };