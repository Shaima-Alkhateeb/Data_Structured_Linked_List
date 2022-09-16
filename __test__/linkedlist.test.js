"use strict";

const LinkedList = require("../linkedlist");

//Add Node
//-------------------------------------------

describe("Add Node", () => {
  describe("Insert at the biggining ", () => {
    it("Insert At Head", () => {
      const ll = new LinkedList();
      ll.insertAtHead(10);
      const oldHead = ll.head;
      ll.insertAtHead(20);

      expect(ll.head.value).toBe(20);
      expect(ll.head.next).toBe(oldHead);
      expect(ll.length).toBe(2);
    });

    it("with index less than 0 it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });

    it("With index greater than list length it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });

    it("with index 0 it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });

    it("with index in the middle", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });

    it("insert at the given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });

    describe("Insert to the end", () => {
      it("Append to an empty LL", () => {
        const ll = new LinkedList();
        ll.appendAtEnd(10);
        expect(ll.head.value).toEqual(10);
        expect(ll.head.next).toBeNull();
      });

      it("Append to non-empty LL", () => {
        const ll = new LinkedList();
        ll.appendAtEnd(10);
        ll.appendAtEnd(20);
        ll.appendAtEnd(30);

        expect(ll.head.value).toEqual(10);
        expect(ll.head.next.value).toEqual(20);
        expect(ll.head.next.next.value).toEqual(30);
        expect(ll.head.next.next.next).toBeNull();
      });
    });
  });

  //   describe("Insert with index less than 0", () => {
  //     it("it does not insert anything", () => {
  //       const ll = LinkedList.fromValues(10, 20);
  //       ll.insertAtIndex(-1, 30);

  //       expect(ll.length).toBe(2);
  //     });
  //   });

  //   describe("Insert with index greater than list length", () => {
  //     it("it does not insert anything", () => {
  //       const ll = LinkedList.fromValues(10, 20);
  //       ll.insertAtIndex(5, 30);

  //       expect(ll.length).toBe(2);
  //     });
  //   });

  //   describe("Insert with index 0", () => {
  //     it("insert at the head", () => {
  //       const ll = LinkedList.fromValues(10, 20);
  //       ll.insertAtIndex(0, 30);

  //       expect(ll.head.value).toBe(30);
  //       expect(ll.head.next.value).toBe(10);
  //       expect(ll.length).toBe(3);
  //     });
  //   });

  //   describe("Insert with index in the middle", () => {

  //   });
});

//-------------------------------------------
//-------------------------------------------
//Delete Node

describe("Delete Node", () => {
  it("delete the head", () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(2);
  });

  it("less than 0 it does not delete anything", () => {
    const ll = LinkedList.fromValues(10, 20);
    ll.removeAtIndex(-1);

    expect(ll.length).toBe(2);
  });

  it("Delete with index 0 will delete the head", () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeAtIndex(0);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next.value).toBe(30);
    expect(ll.length).toBe(2);
  });

  it("Delete with index greater than list length it does not delete anything", () => {
    const ll = LinkedList.fromValues(10, 20);
    ll.removeAtIndex(-1);

    expect(ll.length).toBe(2);
  });

  it("Delete index in the middle", () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40);
    ll.removeAtIndex(2);
    const node = ll.getByIndex(1);

    expect(node.value).toBe(20);
    expect(node.next.value).toBe(40);
    expect(ll.length).toBe(3);
  });
});


//-------------------------------------------------------------------------------
//v1

// describe('Testing LinkedList', () => {
//     it('create a linked list', () => {
//         const list = new LinkedList();           //create a new instance from linkedlist class
//         expect(list).toBeDefined();              //check if the list is defined
//         expect(list).toBeInstanceOf(LinkedList); //check the list
//         expect(list.head).toBeNull();            //check the head if its null
//     });
// });

// describe('Inserting into the linked list (beginning)', () => {
//     it('insert into empty linked list', () => {
//         const list = new LinkedList();
//         const value = 5;
//         list.insert(value);                          // insert a value into the list
//         expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
//         expect(list.head.next).toBeNull();           // check if the next value is null
//     });

//     it('insert into not empty linked list ', () => {
//         const list = new LinkedList();
//         const value = 5;
//         list.insert(value);                          // insert a value into the list
//         // expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
//         // expect(list.head.next).toBeNull();           // check if the next value is null

//         const value2 = 10;
//         list.insert(value2);                         // insert a value into the list
//         // expect(list.head.value).toEqual(value2);     // check if the value is equal to the value inserted
//         // expect(list.head.next.value).toEqual(value); // check if the next value is equal to the value inserted
//         // expect(list.head.next.next).toBeNull();      // check if the next value is null

//         const value3 = 15;
//         list.insert(value3);                         // insert a value into the list
//         expect(list.head.value).toEqual(value3);     // check if the value is equal to the value inserted
//         expect(list.head.next.value).toEqual(value2);// check if the next value is equal to the value inserted
//         expect(list.head.next.next.value).toEqual(value); // check if the next value is equal to the value inserted
//         expect(list.head.next.next.next).toBeNull(); // check if the next value is null
//     });
// });

// describe('append to the end of the linked list', () => {
//     it('append to empty linked list', () => {
//         const list = new LinkedList();
//         const value = 5;
//         list.append(value);                          // append a value into the list
//         expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
//         expect(list.head.next).toBeNull();           // check if the next value is null
//     });

//     it('append to not empty linked list ', () => {
//         const list = new LinkedList();
//         const value = 5;
//         list.append(value);                             // append a value into the list
//         // expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
//         // expect(list.head.next).toBeNull();           // check if the next value is null

//         const value2 = 10;
//         list.append(value2);                            // append a value into the list
//         // expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
//         // expect(list.head.next.value).toEqual(value2);// check if the next value is equal to the value inserted
//         // expect(list.head.next.next).toBeNull();      // check if the next value is null

//         const value3 = 15;
//         list.append(value3);                               // append a value into the list
//         expect(list.head.value).toEqual(value);            // check if the value is equal to the value inserted
//         expect(list.head.next.value).toEqual(value2);      // check if the next value is equal to the value inserted
//         expect(list.head.next.next.value).toEqual(value3); // check if the next value is equal to the value inserted
//         expect(list.head.next.next.next).toBeNull();       // check if the next value is null
//     });
// } );

// describe('delete the middle node from the linked list', () => {
//     it('when the linked list is empty', () => {
//         const list = new LinkedList();
//         expect(list.head).toBeNull();           // check if the head is null
//     });

//     it('delete linked list', () => {
//         // const list = new LinkedList();
//         // const value = 5;
//         // list.append(5);

//         // const value2 = 10;
//         // list.append(10);
//         // list.delete(value2);                       // delete the value from the list
//         // const value3 = 15;
//         // list.append(value3);

//         // expect(list.head.value).toEqual(value);
//         // list.delete(value2);
//         // expect(list.head.next.value).toEqual(value3);
//         // expect(list.head.next.next).toBeNull();

//     });

// } );

// describe('insert into a specific location in the linked list', () => {
//     it('insert into empty linked list', () => {
//         const list = new LinkedList();
//         const value = 5;
//         list.append(value);
//         // expect(list.head.value).toEqual(value);
//         // expect(list.head.next).toBeNull();
//     });

//     it('insert into empty linked list', () => {
//         const list = new LinkedList();
//         const value = 5;
//         list.append(value);
//         expect(list.head.value).toEqual(value);
//         expect(list.head.next).toBeNull();

//         const value2 = 10;
//         list.append(value2);
//         // expect(list.head.value).toEqual(value);
//         // expect(list.head.next.value).toEqual(value2);
//         // expect(list.head.next.next).toBeNull();

//         const value3 = 15;
//         list.append(value3);
//         expect(list.head.value).toEqual(value);
//         expect(list.head.next.value).toEqual(value2);
//         expect(list.head.next.next.value).toEqual(value3);
//         expect(list.head.next.next.next).toBeNull();
//     });
// } );
