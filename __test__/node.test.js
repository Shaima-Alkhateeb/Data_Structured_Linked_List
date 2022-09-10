'use stict';

const Node = require('../node');

describe('Testing Node ', () => {
    it('create a new node', () => {
        const value = 'test';
        const node = new Node(value); //It will called the constructor 
        expect(node).toBeInstanceOf(Node);  //check the node
        expect(node.value).toEqual(value);  //check the value 
        expect(node.next).toBeNull();       //check the next if its null
    });
});

//Instance: to check if an object is an instance of a class .toBeInstanceOf(Class)