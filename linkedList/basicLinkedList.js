class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        this.head = null,
        this.size = 0
    };

    traverse() {
        if(this.isEmpty()) return 'Linked List is empty';
        let current = this.head;
        let arr = []
        while(current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    isEmpty() {
        return this.size == 0;
    };

    addData(data) {
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
        this.size++;
    };
};

let l1 = new LinkedList();
console.log(l1.isEmpty());
l1.addData('amit aslia');
l1.addData('Punnet aslia');
l1.addData('Chaheti aslia');
console.log(l1.isEmpty());
console.log(l1.traverse());


