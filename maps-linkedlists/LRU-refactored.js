/*
NewCache(size) - creates new lru cache
getItem - Get(key) - gets an item in the cache
setHead - Put(key, value) - puts an item into the cache
Delete(key) - deletes an item in the cache

cache = NewCache(2)
cache.put("hello", "world")
cache.put("hello2", "world")
cache.get("hello")
cache.put("hello3", "world")
cache.get("hello") = nil

*/
class ListNode {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}
class Cache {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.head = null;
    this.tail = null;
    this.map = new Map();
  }

  // check size
  checkSize() {
    return this.map.size >= this.maxSize;
  }
  checkKey(key) {
    return this.map.has(key);
  }

  // set head - Puts an new item into the LRU or
  // updates the head when an item is accessed
  setHead(key, value) {
    if (key === null) {
      console.log('key is null');
      return;
    }
    // The LRU doesn't have the key: It's empty or adding a new entry
    if (!this.checkKey(key)) {
      // No elements in the cache
      const newNode = new ListNode(key, value);
      if (this.head === null) {
        this.head = newNode, this.tail = newNode;
        return;
      }
      // New Entry - set it as head, update old bindings
      const oldHead = this.head;
      newNode.prev = oldHead;
      this.head = newNode;
      return;
    }
    // The LRU Has the key, so we are rewriting a duplicate or moving an old entry


  }

  // get item
  getItem(key) {}

  // update list links
  updateLinks() {

  }

    // removeItem
  removeItem() {

  }

  // remove tail
  removeTail() {

  }
}

const LRU = new Cache(2);
console.log(LRU.checkSize());
LRU.setHead('test1', 'value1');
LRU.setHead('test2', 'value1');
console.log(LRU);
