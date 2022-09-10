'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

module.exports = Node;


//or
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }