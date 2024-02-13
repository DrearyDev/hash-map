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

    return { hash };
};

export { hashSet };