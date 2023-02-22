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

    const linkedStr = list.toString();

    expect(linkedStr).toEqual('{ orange } -> { apple } -> NULL');
  });

  it('should indicate whether a given value exists in the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insert('strawberry');
    list.insert('kiwi');

    expect(list.includes('kiwi')).toBeTruthy();
    expect(list.includes('shoe')).toBeFalsy();
  });

  it('should add a value to the end of the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.append('strawberry');

    const linkedStr = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedStr).toEqual('{ banana } -> { orange } -> { apple } -> { strawberry } -> NULL');
  });

  it('should add multiple values to the end of the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.append('strawberry');
    list.append('kiwi');

    const linkedStr = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedStr).toEqual('{ banana } -> { orange } -> { apple } -> { strawberry } -> { kiwi } -> NULL');
  });

  it('should add a value before and after a specific value', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertBefore('apple', 'strawberry');
    list.insertAfter('banana', 'kiwi');

    const linkedStr = list.toString();

    expect(list.head.value).toEqual('banana');
    expect(linkedStr).toEqual('{ banana } -> { kiwi } -> { orange } -> { strawberry } -> { apple } -> NULL');
  });

  it('should add a value before first item in list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertBefore('banana', 'strawberry');

    const linkedStr = list.toString();

    // expect(list.head.value).toEqual('cherry');
    expect(linkedStr).toEqual('{ strawberry } -> { banana } -> { orange } -> { apple } -> NULL');
  });

  it('should add a value after last item in list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insertAfter('apple', 'strawberry');

    const linkedStr = list.toString();

    // expect(list.head.value).toEqual('cherry');
    expect(linkedStr).toEqual('{ banana } -> { orange } -> { apple } -> { strawberry } -> NULL');
  });

  it('should return value k from end of list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('banana');
    list.insert('strawberry');
    list.insert('kiwi');

    expect(list.kthFromEnd(2)).toEqual('banana');
    expect(list.kthFromEnd(3)).toEqual('strawberry');
    expect(list.kthFromEnd(7)).toEqual('Exception');
    expect(list.kthFromEnd(4)).toEqual('kiwi');
    expect(list.kthFromEnd(0)).toEqual('apple');
    expect(list.kthFromEnd(-1)).toEqual('Exception');
  });

});
