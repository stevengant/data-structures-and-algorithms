# Code Challenge - Class 35

## Project: Graph Implementation

### Author: Steve Gant

### Problem Domain  

Implement your own Graph. The graph should be represented as an adjacency list, and should include the methods listed in *Features / Routes*

### Links and Resources

- [GitHub Repo](https://github.com/stevengant/data-structures-and-algorithms/tree/main/javascript/graph)


### Setup

#### Features / Routes

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no nodes
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no nodes
- size
  - Arguments: none
  - Returns the total number of nodes in the graph
  - 0 if there are none

#### Tests

- How do you run tests?
  - `npm test graph.test`

- Describe any tests that you did not complete, skipped, etc
  - Can't seem to get anything to pass
