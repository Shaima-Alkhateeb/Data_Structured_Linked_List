'use strict';

const LinkedList = require('../linkedlist');

describe('Testing LinkedList', () => {
    it('create a linked list', () => {
        const list = new LinkedList();           //create a new instance from linkedlist class
        expect(list).toBeDefined();              //check if the list is defined
        expect(list).toBeInstanceOf(LinkedList); //check the list 
        expect(list.head).toBeNull();            //check the head if its null
    });
});


describe('Inserting into the linked list (beginning)', () => {
    it('insert into empty linked list', () => {
        const list = new LinkedList();
        const value = 5;
        list.insert(value);                          // insert a value into the list
        expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
        expect(list.head.next).toBeNull();           // check if the next value is null
    });

    it('insert into not empty linked list ', () => {
        const list = new LinkedList();
        const value = 5;
        list.insert(value);                          // insert a value into the list
        expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
        expect(list.head.next).toBeNull();           // check if the next value is null
        
        const value2 = 10;
        list.insert(value2);                         // insert a value into the list
        expect(list.head.value).toEqual(value2);     // check if the value is equal to the value inserted
        expect(list.head.next.value).toEqual(value); // check if the next value is equal to the value inserted
        expect(list.head.next.next).toBeNull();      // check if the next value is null
    });
});


describe('append to the end of the linked list', () => {
    it('append to empty linked list', () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);                          // append a value into the list
        expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
        expect(list.head.next).toBeNull();           // check if the next value is null
    });

    it('append to not empty linked list ', () => {
        const list = new LinkedList();
        const value = 5;
        list.append(value);                          // append a value into the list
        expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
        expect(list.head.next).toBeNull();           // check if the next value is null
        
        const value2 = 10;
        list.append(value2);                         // append a value into the list
        expect(list.head.value).toEqual(value);      // check if the value is equal to the value inserted
        expect(list.head.next.value).toEqual(value2);// check if the next value is equal to the value inserted
        expect(list.head.next.next).toBeNull();      // check if the next value is null
    });
} );