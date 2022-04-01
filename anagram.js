/**
 * check to see if two strings are anagrams
 * else return -1
 * 
 * Anagrams have the same characters in the same quantity
 * 
 * “listen” and “silent”
   “rail safety” and “fairy tales”
   “dormitory” and “dirty room”
   “the eyes” and “they see”
 */
debugger;
function checkAnagram(string1, string2) {
    const hashTable = {}

    // create a hashTable of the first string
    for (const char of string1) {
        if(!(char in hashTable) && char !== " ")
            hashTable[char] = 0;
        
        hashTable[char]++;
    }

    // Does the second string match the hashTable?
    // check to see if the char2 exists, if it does, subtract it.
    // 
    for (const char2 of string2) {
        if (!(hashTable[char2])) {
            return false;
        }   else {
            hashTable[char2]--;
        }
    }
    
    return true;

}

console.log(checkAnagram("listen","silet"));