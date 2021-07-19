class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  displayHead() {
    return this.head;
  }

  deleteNodeByData(data) {
    let current = this.head;
    let p;
    if (!current) console.log('List is empty');
    else if (current.data == data) {
      current = null;
    }
    else {
      while(current.next !== null && current.data !== data) {
        p = current;
        current = current.next;
      }
    }
    if (current.data == data) {
      console.log('deltednode is', current.data);
      p.next = current.next;
    }
    else {
      console.log('Element not found');
    }
  };

  createNode(data) {
    return new Node(data);
  };

  traverse() {
    if (this.isEmpty()) {
      console.log('Linked List is empty');
      return;
    } 
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  };

  isEmpty() {
    return this.size === 0;
  }

  addNodeAtEnd(data) {
    const node = this.createNode(data);
    if (this.head === null) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = node;
  };  

  addNode(data) {
    const node = new Node(data);
    let current;
    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  };

  deleteFromEnd() {
    let current = this.head;
    let prevNode = current;
    if (!current) {
      console.log('List is Empty');
      return;
    }
    if (current.next === null) {
      current = null;
    }
    while(current.next !== null) {
      prevNode = current;
      current = current.next;
    }
    console.log('deleted Node is', current.data);
    prevNode.next = null;
  };

  moveLastNodeToFront() {
    let current = this.head;
    let prevNode = current;
    if (!current) {
      console.log('List is Empty')
      return;
    } 
    if (current.next === null) {
      console.log('single node no opertaion requred');
      return;
    }
    while(current.next!== null) {
      prevNode = current;
      current = current.next;
    }
    prevNode.next = null;
    current.next = this.head;
    this.head = current;
  };

  findMid() {
    let current = this.head;
    let midNode = current;
    if (!current) {
      return 'No elemnt found'
    }
    if (current.next === null || current.next.next === null) {
      return midNode.data;
    }
    while(current && current.next !== null && current.next.next) {
      console.log(midNode.data, current.data);
      midNode = midNode.next;
      current = current.next.next
    }
    console.log(midNode.data, current.data);
    return midNode.data;
  };
};

const arr = ['amit', 'aslia', 'puneet', 'aslia', 'compelte']

let l1 = new Linkedlist();
arr.forEach(d => l1.addNode(d));
// console.log(l1.isEmpty());
// l1.addNodeAtEnd('Last Name')
// l1.addNode('amit aslia');
l1.deleteNodeByData('Lastd Name');
// l1.deleteFromEnd();
// l1.moveLastNodeToFront();
// l1.traverse();
console.log('this is mid',l1.findMid());
