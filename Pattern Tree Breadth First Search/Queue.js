export class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  // add elements to queue
  enqueue(element) {
    // the tail is the end. It starts off at 0
    this.elements[this.tail] = element;
    this.tail++; // keeps track of the current empty index in the map
  }

  // remove elements from queue
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  // look at the next item to dequeue
  peek() {
    return this.elements[this.head];
  }

  // return length of queue
  getLength() {
    return this.tail - this.head;
  }

  // check if empty
  isEmpty() {
    return this.getLength() === 0;
  }
}
