'use strict';
import { linkedList } from "./linkedList.js";

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

        if (table[hashCode % table.length]) {//already something there

            let linkedListLength = table[hashCode % table.length].getSize();

            for (let i = 0; i < linkedListLength; i++) {//loop list to check for matching key
                let linkedKey = Object.keys(table[hashCode % table.length].at(i).value)[0];

                if (linkedKey === key) {
                    table[hashCode % table.length].at(i).value[key] = value;
                    return;
                };
            };

            // if no match found then append it key and value to list
            table[hashCode % table.length].append({[key]: value});

        } else {// nothing there so create the first linked list
            let linked = linkedList();
            linked.append({[key]: value});

            table[hashCode % table.length] = linked;
        };
    };

    const get = (key) => {
        let hashCode = hash(key);

        if (table[hashCode % table.length]) {
            let linkedListLength = table[hashCode % table.length].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = Object.keys(table[hashCode % table.length].at(i).value)[0];

                if (linkedKey === key) {
                    return table[hashCode % table.length].at(i).value[key];
                };
            };
        };

        return null;
    };

    const has = (key) => {
        let hashCode = hash(key);

        if (table[hashCode % table.length]) {
            let linkedListLength = table[hashCode % table.length].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = Object.keys(table[hashCode % table.length].at(i).value)[0];

                if (linkedKey === key) { return true };
            };
        };

        return false;
    };

    const remove = (key) => {
        let hashCode = hash(key);

        if (table[hashCode % table.length]) {
            let linkedListLength = table[hashCode % table.length].getSize();

            for (let i = 0; i < linkedListLength; i++) {
                let linkedKey = Object.keys(table[hashCode % table.length].at(i).value)[0];

                if (linkedKey === key) {
                    table[hashCode % table.length].removeAt(i);
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