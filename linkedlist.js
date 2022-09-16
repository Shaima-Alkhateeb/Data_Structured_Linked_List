'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(value) {
        const node = new Node(value);
        if(!this.head) {         // if the linked list is empty
          this.head = node;
        } else {                 // if linked list is not empty
          node.next = this.head;
          this.head = node
        }
        console.log(this.head);

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
        console.log(this.head);
    }

  //   delete() {
  //     if (this.length === 0) {
  //       return null;
  //     }

  //     let current = this.head;
  //     while(current.next) {
  //       current = current.next.next;
  //     }
  //     current.next = null;

      

  // }

    insertAt(value, index) {
        const node = new Node(value);
        // if(!this.head) {           // if the linked list is empty
        //   return null;
        // }

        // if(index === 0) {          // if the index is the head
        //   this.head = node;
        // //   return;
        // }

        let current = this.head;    // if the index is not the head
        let counter = 0;            // counter to keep track of the index
        while(current.next) {       // while there is a next node
          if(counter === index) {   // if the index is the next node
            current.next = node;
            // return;
          }
          current = current.next;    
          counter++;
        }
        console.log(this.head);
    }


}

module.exports = LinkedList;
