'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should insert at the beginning of empty', () => {
    const list = new LinkedList();
    list.insert('apple');

    expect(list.head.value).toEqual('apple');
    expect(list.head.next).toBeNull();
  });

  it('should insert at the beginning of populated list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    expect(list.head.value).toEqual('orange');
    expect(list.head.next.value).toEqual('apple');
    expect(list.head.next.next).toBeNull();
  });

  it('should display as string properly', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    const linkedString = list.toString();

    expect(linkedString).toEqual('{ orange } -> { apple } -> NULL');

  });

  it('should indicate whether a given value exists in the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insert('strawberry');
    list.insert('grape');

    expect(list.includes('grape')).toBeTruthy();
    expect(list.includes('onion')).toBeFalsy();
  });

  it('should add a value to the end of the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.append('strawberry');

    const linkedString = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedString).toEqual('{ banana } -> { orange } -> { apple } -> { strawberry } -> NULL');

  });

  it('should add multiple values to the end of the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.append('strawberry');
    list.append('grape');

    const linkedString = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedString).toEqual('{ banana } -> { orange } -> { apple } -> { strawberry } -> { grape } -> NULL');

  });

  it('should add a value before and after a specific value', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertBefore('apple', 'strawberry');
    list.insertAfter('banana', 'kiwi');

    const linkedString = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedString).toEqual('{ banana } -> { kiwi } -> { orange } -> { strawberry } -> { apple } -> NULL');

  });

  it('should add a value before first item in list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertBefore('banana', 'strawberry');

    const linkedString = list.toString();

    // expect(list.head.value).toEqual('strawberry');
    expect(linkedString).toEqual('{ strawberry } -> { banana } -> { orange } -> { apple } -> NULL');

  });

  it('should add a value after last item in list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertAfter('apple', 'strawberry');

    const linkedString = list.toString();

    expect(linkedString).toEqual('{ banana } -> { orange } -> { apple } -> { cherry } -> NULL');

  });

});