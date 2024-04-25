const Node = function (data) {
  this.data = data;
  this.next = null;
};

class LinkedList {
  constructor() {
    this.root = null;
  }
  addNode(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      if (data === "Puneet") {
        current.next = newNode;
        current = current.next;
        current.next = this.root;
      } else {
        current.next = newNode;
      }
    }
  }

  traverseLinkedList() {
    if (this.root === null) {
      return -1;
    }
    let current = this.root;
    while (current.next) {
      console.log(current.data);
      current = current.next;
    }
  }

  isCircular() {
    if (this.root === null) return "List is empty";
    if (this.root.next === null) return "Only one Node";
    let slow = this.root;
    let fast = this.root.next;
    if (!slow.next || !fast.next) return "Not a circular linked list";
    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (!slow || !slow.next || !fast || !fast.next) {
        return "Not a circular linked list";
      }
    }
    return "circular Linked List";
  }
}

const list = new LinkedList();
list.addNode("Amit");
list.addNode("Aslia");
list.addNode("Puneet");

console.log(list.isCircular());
