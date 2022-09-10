'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if(!this.head) {         // if the linked list is empty
          this.head = node;
        } else {                 // if linked list is not empty
          node.next = this.head;
          this.head = node
        }

        // this.head = new Node(value, this.head);  //create a new node and assign it to the head
    }

    append(value) {
        const node = new Node(value);
        if(!this.head) {           // if the linked list is empty
          this.head = node;
        } else {                   // if linked list is not empty
          let current = this.head;
          while(current.next) {    // while there is a next node
            current = current.next;
          }
          current.next = node;     // assign the new node to the next of the last node
        }
    }
}

module.exports = LinkedList;
