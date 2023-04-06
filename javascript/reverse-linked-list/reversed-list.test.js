const { Node, reverse, displayList } = require('./index');

describe('reversed linked list', () => {
  let head;

  beforeEach(() => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    head = node1;
  });

  it('returns a reversed linked list', () => {
    let reversedList = reverse(head);
    let expectedOutput = [4, 3, 2, 1];
    let current = reversedList;
    let i = 0;
    while (current !== null) {
      expect(current.data).toBe(expectedOutput[i]);
      current = current.next;
      i++;
    }
  });
});