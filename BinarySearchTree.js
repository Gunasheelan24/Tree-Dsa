class NodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    const tree = new NodeTree(null);
    this.root = tree;
  }
  insertMethod(value) {
    const newNode = new NodeTree(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let temp = this.root;
      while (true) {
        if (temp.value > newNode.value) {
          if (temp.left === null) {
            temp.left = newNode;
            return this;
          } else {
            temp = temp.left;
          }
        } else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          } else {
            temp = temp.right;
          }
        }
      }
    }
  }
  contain(target) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (target < temp.value) {
        temp = temp.left;
      } else if (target > temp.value) {
        temp = temp.right;
      } else if (temp.value === target) {
        console.log("Success");
        return temp;
      } else {
        console.log("Failer");
        return false;
      }
    }
  }
}

const firstTree = new BinarySearchTree();
// const getMethod = firstTree.contain(0);
firstTree.insertMethod(0);
firstTree.insertMethod(1);
firstTree.insertMethod(2);
firstTree.insertMethod(3);
console.log(getMethod);
