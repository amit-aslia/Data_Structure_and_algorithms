const prompt = require('prompt-sync')();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
     };
};


class InsertionLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    printList() {
        if(this.head === null) return `List is Empty...`;
        let current = this.head;
        let str = '';
        while(current) {
            str = str + '\n' + current.data;
            current = current.next;
        };
        return str;
    }

    isEmpty() {
        return this.size === 0;
    }

    addAtLast(data) {
        let node = new Node(data);
        let current;
        if(this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            };
            current.next = node;
        };
        this.size++;
        return `added Item is ${data}`;
    };

    addAtBeginning(data) {
        let node = new Node(data);
        if(this.head == null) this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }

        return `${data} is added in the beginning`;
    };

    addAfterData(data,loc) {
        if(this.head == null) return `List is empty...`;
        let node = new Node(data);
        let current = this.head;
        while(current) {
            if(current.data == loc) {
                let temp = current.next;
                current.next = node;
                node.next = temp;
                return;
            };
            current = current.next;
        }
        return `Data not found in list`;
    };

    addBeforeData(data, loc) {
        if(this.head == null) return `List is empty...`;
        let index = 0;
        let node = new Node(data);
        let current = this.head;
        let temp = current;
        while(current) {
            if(current.data == loc) {
                if(index == 0) {
                    node.next = temp;
                    this.head = node;
                }
                else {
                    node.next = current;
                    temp.next = node;
                    index++;
                }
                return;
            };
            temp = current;
            current = current.next;
        }
        return `Data not found in list`;
    }
};

let l1 = new InsertionLinkedList();
let i = 0;
while(i<5) {
    l1.addAtLast(i);
    i++;
} 
l1.addBeforeData(123,0);
l1.addAfterData(12,0);
console.log(l1.printList());

const check = () => {
    console.log('1 for add 2 for print 3 for exit');
    input = prompt('Enter your imput');
    if(input == 1) {
        data = prompt('Enter your data');
        console.log(l1.addAtLast(data));
        check();
    }
    else if(input == 2) {
        data = prompt('Enter your data');
        l1.addAtBeginning(data);
        check()
    }
    else if(input == 3) {
        console.log(l1.printList())
        check()
    }
    else {
        return;
    }
};


// check();