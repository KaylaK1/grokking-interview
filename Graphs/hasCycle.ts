class Graph {
  nodes: GraphNode[];
  constructor() {
    this.nodes = [];
  }
}
class GraphNode {
  value: number;
  edges: GraphNode[]; // verticies, edges, children
  constructor(value: number, edges: GraphNode[]) {
    this.value = value;
    this.edges = edges;
  }

  hasCycle(visited: Set<GraphNode> = new Set()) {
    if (visited.has(this)) {
      return true;
    }
    visited.add(this);
    // add root node's children to set
    for (const edge of this.edges) {
      if (edge.hasCycle(visited)) {
        return true;
      }
    }
    // pop off first child from set and add its children to set
    visited.delete(this);
    return false;
  }
}
