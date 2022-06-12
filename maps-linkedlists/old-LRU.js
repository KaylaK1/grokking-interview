/*
NewCache(size) - creates new lru cache
Get(key) - gets an item in the cache
Put(key, value) - puts an item into the cache
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
    this.hashMap = new Map();
  }

  // Put
  // Store each
  put(key, value) {
    if (key !== null) {
      // create a new node with value
      const newNode = new ListNode(key, value);
      if (this.hashMap.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        const oldHead = this.head;
        newNode.prev = oldHead;
        this.head = newNode;
      }
      this.hashMap.set(key, newNode);

      // Delete if listSize > maxSize
      if (this.hashMap.size >= this.maxSize) {
        this.delete(this.tail.key);
      }
    }
  }

  debug() {
    console.log("head:", this.head);
    console.log("tail:", this.tail);
    console.log("size:", this.hashMap.size)
    const iterate = (cur) => {
      if (cur === null) {
        console.log("end")
        return
      }

      console.log(cur);
      iterate(cur.prev)
    };
    iterate(this.head);
    console.log();
  }
  // Get an item in the collection
  get(key) {
    if (!this.hashMap.has(key)) {
      return null;
    }

    const item = this.hashMap.get(key);
    if (this.hashMap.size === 1) {
      return item.value;
    }
    // move to top of list

    item.next.prev = item.prev;
    item.prev.next = item.next;
    item.prev = this.head;
    item.next = null;
    this.head = item;

    return item.value;
  }

  // Delete
  delete(key) {
    // fail fast
    if (!this.hashMap.has(key)) {
      return;
    }
    if (this.hashMap.size === 1) {
      this.hashMap.delete(key);
      this.head = null;
      this.tail = null;
      return;
    }

    const toDelete = this.hashMap.get(key);

    // tail?
    if (toDelete === this.tail) {
      const oldTail = this.tail; // do i need to have temp?
      this.tail = oldTail.next;
    } else if (toDelete === this.head) {
      const oldHead = this.head;
      this.head = oldHead.prev;
    } else { // Not tail or head
      const oldPrev = toDelete.prev;
      const oldNext = toDelete.next;
      oldPrev.next = oldNext;
      oldNext.prev = oldPrev;
    }
    this.hashMap.delete(key);
  }
}

// const cacheBoi = new Cache(2);
// cacheBoi.put('hello', 'world');
// cacheBoi.debug();

// cacheBoi.delete('hello');
// cacheBoi.debug();
// cacheBoi.put('hello', 'world');
// console.log('Get test: ',cacheBoi.get('hello'));
// cacheBoi.debug();
