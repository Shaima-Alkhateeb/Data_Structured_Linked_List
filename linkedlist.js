'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {//1
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }


  appendAtEnd(value) {//2
    const newNode = new Node(value);
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

  insertAtIndex(index, value) {//4
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new Node(value, prev.next);
    this.length++;
  }

  removeAtIndex(index) {//3
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    this.length--;
  }


  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }




  // print() {
  //   let output = '';
  //   let current = this.head;
  //   while (current) {
  //     output = `${output}${current.value} -> `;
  //     current = current.next;
  //   }
  //   console.log(`${output}null`);
  // }
}


LinkedList.fromValues = function(...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
}

module.exports = LinkedList;


//---------------------------------------------------------------------

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }

//     insert(value) {
//         const node = new Node(value);
//         if(!this.head) {         // if the linked list is empty
//           this.head = node;
//         } else {                 // if linked list is not empty
//           node.next = this.head;
//           this.head = node
//         }
//         console.log(this.head);

//         // this.head = new Node(value, this.head);  //create a new node and assign it to the head
//     }

//     append(value) {
//         const node = new Node(value);
//         if(!this.head) {           // if the linked list is empty
//           this.head = node;
//         } else {                   // if linked list is not empty
//           let current = this.head;
//           while(current.next) {    // while there is a next node
//             current = current.next;
//           }
//           current.next = node;     // assign the new node to the next of the last node
//         }
//         console.log(this.head);
//     }

//     delete() {
//       // if (this.length === 0) {
//       //   return null;
//       // }

//       // let current = this.head;
//       // while(current.next) {
//       //   current = current.next.next;
//       // }
//       // current.next = null;
      
//       if (this.head === null) return null;
//       if (this.head.next === null) {
//         this.head = this.head.next;
//         return null;
//       }
//       let mid = parseInt(this.length / 2)
//       // console.log(mid);
//       this.removeAtIndex(mid)

      

//   }

//     insertAt(value, index) {
//         const node = new Node(value);
//         // if(!this.head) {           // if the linked list is empty
//         //   return null;
//         // }

//         // if(index === 0) {          // if the index is the head
//         //   this.head = node;
//         // //   return;
//         // }

//         let current = this.head;    // if the index is not the head
//         let counter = 0;            // counter to keep track of the index
//         while(current.next) {       // while there is a next node
//           if(counter === index) {   // if the index is the next node
//             current.next = node;
//             // return;
//           }
//           current = current.next;    
//           counter++;
//         }
//         console.log(this.head);
//     }


// }

// module.exports = LinkedList;
