# Linked List Insertions
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

## Challenge
Extending an Implementation 

## Approach & Efficiency
Used singly linked list
BigO = O(n)
Space complexity = O(1)

## API
### Linked List

- Create a Linked List class
- append
    - arguments: new value
    - adds a new node with the given value to the end of the list

- insert before
    - arguments: value, new value
    - adds a new node with the given new value immediately before the first node that has the value specified

- insert after
    - arguments: value, new value
    - adds a new node with the given new value immediately after the first node that has the value specified

### checklist
[ ] Can successfully add a node to the end of the linked list
[ ] Can successfully add multiple nodes to the end of a linked list
[ ] Can successfully insert a node before a node located i the middle of a linked list
[ ] Can successfully insert a node before the first node of a linked list
[ ] Can successfully insert after a node in the middle of the linked list
[ ] Can successfully insert a node after the last node of the linked list
