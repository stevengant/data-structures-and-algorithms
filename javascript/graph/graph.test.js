'require strict';

const {Graph} = require('../graph');

describe('breadthFirst', () => {
  it('visits all vertices', () => {
    const graph = new Graph();

    const a = graph.addVertex('A');
    const b = graph.addVertex('B');
    const c = graph.addVertex('C');
    const d = graph.addVertex('D');
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);

    const visited = [];
    graph.breadthFirst(a, (value) => visited.push(value));

    expect(visited).toEqual(['A', 'B', 'C', 'D']);
  });

  it('does not visit vertices multiple times', () => {
    const graph = new Graph();

    const a = graph.addVertex('A');
    const b = graph.addVertex('B');
    const c = graph.addVertex('C');
    const d = graph.addVertex('D');
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);

    const visited = graph.breadthFirst(a);
    expect(visited.size).toBe(4);
  });

  it('handles disconnected graphs', () => {
const graph = new Graph();

    const a = graph.addVertex('A');
    const b = graph.addVertex('B');
    const c = graph.addVertex('C');
    const x = graph.addVertex('X');
    const y = graph.addVertex('Y');
    const z = graph.addVertex('Z');
    graph.addEdge(a, b);
    graph.addEdge(b, c);
    graph.addEdge(x, y);
    graph.addEdge(y, z);

    const visited = graph.breadthFirst(a);
    expect(visited.size).toBe(3);

    const visited2 = graph.breadthFirst(x);
    expect(visited2.size).toBe(3);
  });

  it('handles graphs with cycles', () => {
    const graph = new Graph();

    const a = graph.addVertex('A');
    const b = graph.addVertex('B');
    const c = graph.addVertex('C');
    const d = graph.addVertex('D');
    graph.addEdge(a, b);
    graph.addEdge(b, c);
    graph.addEdge(c, d);
    graph.addEdge(d, b); // create cycle
  
    const visited = graph.breadthFirst(a);
    expect(visited.size).toBe(4);
  });
});