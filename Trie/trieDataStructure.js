class TrieNode {
    constructor(char) {
        this.children = [];
        for (let i = 0; i < 26; i++) { // the alphabet
            this.children[i] = null;
        }
        this.isEndWord = false; // true if node is the end of the word
        this.char = char; // the value of a particular key
    }
    // Function to mark the currentNode as Leaf
    markAsLeaf() {
        this.isEndWord = true;
    }
    // Unmark the currentNode as Leaf
    unMarkAsLeaf() {
        this.isEndWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(''); // Root Node
    }
    /**
     * @param {string} currentChar 
     * @returns @function charCodeAt returns the UTF-16 code at the given
     * index. Here 0 since we are passing in one character.
     * @function "a".charCodeAt(0) @returns 97
     */
    getIndex(currentChar) {
        return currentChar.charCodeAt(0) - "a".charCodeAt(0);
    }

    // Insert a key into the trie
    // Worst case is O(n), where n length of the word.
    insert(key) {
        if (key === null) {
            return;
        }
        key = key.toLowerCase();
        let currentNode = this.root;
        let index = 0;
        // Store the character index
        // Iterate the trie with the given character index, if the index
        // points to null, simply create a TrieNode and go down a level
        for (let level = 0; level < key.length; level++) {
            // 
            index = this.getIndex(key[level]);
            // if the currentNode doesn't have the character unicode
            // Insert a new Trienode as a child of currentNode at the unicode
            // index with the character as a value
            if (currentNode.children[index] == null) {
                currentNode.children[index] = new TrieNode(key[level]);
                console.log(String(key[level]) + "inserted");
            }
            // update our current position the childnode of the current character unicode
            currentNode = currentNode.children[index];
        }
        // Mark the end character as leaf node
        currentNode.markAsLeaf();
        console.log("'" + key + "' inserted");
    }

    // Search for a given key in Trie
    search(key) {
        return false
    }
    
    // delete a key
    delete(key) {
        return;
    }
}