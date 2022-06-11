/**
 * Every node stores a character, an array of children that
 * point to child nodes, and a flag to indicate the end of a word
 */
class TrieNode {
  constructor(char) {
    this.children = [];
  }
}
class Trie {
  constructor() {
    // The Root node holds no values
    this.root = new TrieNode('');
  }

  //getIndex(param){}
  insert(key) {}
  search(key)
}
