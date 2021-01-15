class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



class DeleteLinkedList {
    constructor() {
        this.head = null;
    }

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

    deleteFromLast() {
        if(this.head == null) return 'List is Empty...';

        let current = this.head;
        let temp = current.next;
        if(current.next == null) {
            this.head = null;
            return 'node deleted'
        } 
        while(temp.next != null) {
            current = current.next;
            temp = temp.next
        };
        current.next = null;
        return ' Node deleted'
    };
}

let l1 = new DeleteLinkedList();

let i = 0;
while(i<2) {
    l1.addAtLast(i);
    i++;
};
console.log(l1.printList())
console.log(l1.deleteFromLast())
console.log(l1.printList())
