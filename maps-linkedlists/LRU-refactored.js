/*
LRU Cache - Least recently used Cache
When the Cache is full, remove the least recently used. Accessing or adding a key in the cache
updates it to the most recently used.

NewCache(size) - creates new lru cache
Get(key) - gets an item in the cache
Put(key, value) - puts an item into the cache
Delete(key) - deletes an item in the cache

cache = NewCache(2)
cache.put("hello", "world")
cache.put("hello2", "world")
  hello2 <-> hello
cache.get("hello")
  hello <-> hello2
cache.put("hello3", "world")
  hello3 <-> hello <-> hello2

adding a duplicate key just updates its value.
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

  // Put - puts an item into the cache

  // Get - gets an item in the cache

  // Delete - deletes an item in the cache

  // check size
  checkSize() {
    return this.map.size >= this.maxSize;
  }
  checkKey(key) {
    return this.map.has(key);
  }
}

const LRU = new Cache(2);
console.log(LRU.checkSize());
LRU.setHead('test1', 'value1');
LRU.setHead('test2', 'value1');
console.log(LRU);
