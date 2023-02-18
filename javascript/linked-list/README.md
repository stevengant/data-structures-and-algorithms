# Singly Linked List
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

## Challenge
Set up a singly linked list and add items to it. Write tests to confirm code works 

## Approach & Efficiency
Used singly linked list
BigO = O(n)
Space complexity = O(1)

## API
### Linked List

- Create a Linked List class
- Within your Linked List class, include a head property.
- Upon instantiation, an empty Linked List should be created.
- The class should contain the following methods:

- insert
  + Arguments: value
  + Returns: nothing
  + Adds a new node with that value to the head of the list with an O(1) Time performance.

- includes
  + Arguments: value
  + Returns: Boolean

- Indicates whether that value exists as a Node’s value somewhere within the list.

- to string
  + Arguments: none

- Returns: a string representing all the values in the Linked List, formatted as:
    - "{ a } -> { b } -> { c } -> NULL"

### checklist

- [ ] Can successfully instantiate an empty linked list
- [ ] Can properly insert into the linked list
- [ ] The head property will properly point to the first    node in the linked list
- [ ] Can properly insert multiple nodes into the linked list
- [ ] Will return true when finding a value within the linked list that exists
- [ ] Will return false when searching for a value in the linked list that does not exist
- [ ] Can properly return a collection of all the values that exist in the linked list

