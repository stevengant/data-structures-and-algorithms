'require strict';

const {Graph} = require('../graph');

describe('Graph', () => {
  it('Can add vertices', () => {
    const graph = new Graph;
    graph.addVertex('Apple');
    expect(graph.adjacencyList.get('Apple')).toEqual([]);
  });

  it('Can add edges to vertices', () => {
    const graph = new Graph;
    graph.addVertex('Apple');
    graph.addVertex('Strawberry');
    graph.addDirectedEdge('Apple', 'Strawberry');

    expect(graph.adjacencyList.get('Strawberry')[0].node).toEqual('Apple');
    expect(graph.adjacencyList.get('Apple')[0].node).toEqual('Strawberry');
  });
})