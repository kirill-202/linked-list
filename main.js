class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.size++;
            return;
        } 
        let node = this._getLastNode(this.head);
        node.next = new Node(value);
        this.tail = node.next;
        this.size++;
        return;
    } 
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        if (this.size === 1) {
            this.tail = newNode;
        }
    }
    _getLastNode(node) {
        if (!node.next) {
            return node;
        } 
        return this._getLastNode(node.next);
    }

    at(index) {
        if (index >= this.size) {
            throw Error("Index is out of range");
        }
        if (index < 0) return Error("Can't be negative")
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) {
              return current; 
            }
            count++;
            current = current.next;
          }

    }
    pop() {
        if (!this.head) return null;
        if (this.size === 1) {
            let node = this.head;
            this.head = this.tail = null;
            this.size = 0;
            return node;
        }
    
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
    
        let lastNode = this.tail;
        current.next = null;
        this.tail = current;
        this.size--;
        return lastNode;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
              return true; 
            }
            if (!current.next) {
                return false;
            }
            current = current.next;
          }
    }
    find(value) {
        let index = 0;
        while (index < this.size) {
            const current = this.at(index);
            if (current.value === value) {
                return index;
            }
            index++;
        }
        return -1;
    }

    toString() {
        let result = [];
        let current = this.head;
    
        while (current) {
            result.push(current.toString());
            current = current.next;
        }
    
        return result.join(" -> ") + " -> null";
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
    toString() {
        return `(${this.value})`;
    }
}


const myList = new LinkedList();
myList.append(5);
myList.prepend(4);
myList.append(10);
console.log(myList.toString());