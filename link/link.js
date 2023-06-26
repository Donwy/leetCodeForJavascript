class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    insertAt(data, position) {
      const newNode = new Node(data);
  
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let previous = null;
        let count = 0;
  
        while (count < position) {
          previous = current;
          current = current.next;
          count++;
        }
  
        newNode.next = current;
        previous.next = newNode;
      }
    }
  
    remove(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let previous = null;
  
        while (current && current.data !== data) {
          previous = current;
          current = current.next;
        }
  
        if (current) {
          previous.next = current.next;
        }
      }
    }
  
    print() {
      let current = this.head;
      let result = '';
  
      while (current) {
        result += current.data + ' -> ';
        current = current.next;
      }
  
      result += 'null';
      console.log(result);
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.print(); // Output: 1 -> 2 -> 3 -> null
  
  linkedList.insertAt(4, 1);
  linkedList.print(); // Output: 1 -> 4 -> 2 -> 3 -> null
  
  linkedList.remove(2);
  linkedList.print(); // Output: 1 -> 4 -> 3 -> null
  