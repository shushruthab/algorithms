class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    let newnode = new Node(val);
    while(true) {
      if (val > current.val) {
        if (current.right === null) {
          current.right = newnode;
          return this;   
        } else {
          current = current.right;
        }  
      } else if (val < current.val) {
        if (current.left === null) {
          current.left = newnode;
          return this; 
        } else {
          current = current.left;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let current = this.root;
    let newnode = new Node(val);

    if (current === null) {
      this.root = newnode;
      return this;
    }
    
    const helper = (current) => {
      if (val > current.val) {
        if (current.right === null) {
          current.right = newnode;
          return this;
        } 
        return helper(current.right);

      } else if (val < current.val) {
        if (current.left === null) {
          current.left = newnode;
          return this;
        } 
        return helper(current.left); 
      }

    }
    helper(current);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentnode = this.root;
    while (currentnode) {
      if (currentnode.val === val) {
        return currentnode;
      }
      if (currentnode.val > val) {
        currentnode = currentnode.left;
      } else {
        currentnode = currentnode.right;
      }
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let current = this.root;
    if (current === null) return undefined;
    let result;
    const helper = (current) => {
      if (current === null) return result;
      if (current.val === val) {
        return result = current;
      } else if (val > current.val) {
        helper(current.right);
      } else helper(current.left);
    }
    helper(current);
    return result;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current = this.root;
    let result = [];

    const traverse = (current) => {
      if (current === null) {
        return;
      }
      // action
      result.push(current.val);
      // left
      traverse(current.left);
      // right
      traverse(current.right);
    }
    traverse(current);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let current = this.root;
    let result = [];

    const traverse = (current) => {
      if (current === null) {
        return;
      }
      // left
      traverse(current.left);
      // action
      result.push(current.val);
      // right
      traverse(current.right);
    }
    traverse(current);
    return result;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let current = this.root;
    let result = [];

    const traverse = (current) => {
      if (current === null) {
        return;
      }
      // left
      traverse(current.left);
      // right
      traverse(current.right);
      // action
      result.push(current.val);
    }
    traverse(current);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let current;
    let result = [];
    let queue = [];
    queue.push(this.root);

    if (this.root === null) {
      return result;
    }

    while (queue.length > 0) {
      current = queue.shift();
      if (current.left !== null) {
        queue.push(current.left);
      } 
      if (current.right !== null) {
        queue.push(current.right);
      }
      result.push(current.val);
    }

    return result;
  }

 

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    let current = this.root;
    if (!current) return undefined;
    if (current.left === null && current.right === null) return undefined;
    let highest = current.val;
    let nexthighest;
    
    const traverse = (current) => {
      if (!current) return;
      if (current.val > highest) {
        nexthighest = highest;
        highest = current.val;
      }
      if (current.val < highest && current.val >nexthighest) {
        nexthighest = current.val;
      }
      traverse(current.left);
      traverse(current.right);
    }
    traverse(current.right);
    return nexthighest;
  }
}

module.exports = BinarySearchTree;


