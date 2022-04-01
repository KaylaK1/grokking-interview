/**
 * input: lowercase English-alphabet letters
 * output: returns the index of the strings first non-repeating character
 * or -1
 */

function firstNonRepeat(string) {
    const hashmap = {};

    for (const char of string) {
        if ((!char in hashmap)) {
            hashmap[char] = 0;
        } else {
            hashmap[char]++;
        }
    }

    for (let idx = 0; idx < string.length; idx++) {
        const character = string[idx];
        if(hashBoi[character] === 0) return idx;
    }
    return -1;
}