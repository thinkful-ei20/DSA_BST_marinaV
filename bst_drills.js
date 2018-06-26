const BST = require('./bst_class');

// create BST
const tree = new BST();

// const data = ["E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"];
const data = [3, 1, 4, 6, 9, 2, 5, 7];
// const data = [3, 1];

// insert data into BST
for (let i = 0; i < data.length; i++) {
  // let strToNum = data[i].charCodeAt(0);
  tree.insert(data[i], "Some value");
}

// height of BST is a number of edges between the tree's root and the furthest leaf
// Since we are visiting each node in the tree, the time complexity is O(n)
const findHeight = (tree) => {
  if (!tree) {
    return -1;
  }

  // if (tree.right && tree.left) {
    return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1;
  // }

  // if (tree.right && !tree.left) {
  //   return findHeight(tree.right) + 1;
  // }
  //
  // if (!tree.right && tree.left) {
  //   return findHeight(tree.left) + 1;
  //
  // }
};

// console.log(findHeight(tree));


const isBST = tree => {
  console.log('TREE', tree);
  if (!tree) {
    return true;
  }

  if (tree.left && tree.left.key > tree.key) {
    return false;
  }

  if (tree.right && tree.right.key < tree.key) {
    return false;
  }

  if (!isBST(tree.left) || !isBST(tree.right)) {
    return false;
  }

  return true;

};

console.log(isBST(tree));


// console.log(tree);
