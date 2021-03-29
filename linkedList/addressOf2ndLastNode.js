class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse = () => {
    
  };

  addData = (data) => {
    const node = new Node(data);
    let current;
    if(this.head === null) {
      this.head = node;
    }
    else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  };
};