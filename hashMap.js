'use strict';

function hashMap() {

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };

        console.log(key);
        console.log(hashCode);
        console.log(hashCode % 16);

        return hashCode;
    };

    return { hash };
};

export { hashMap };