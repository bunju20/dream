class Codec {
    constructor() {}
  
    encode = function (root) {
      if (!root) {
        return null;
      }
      //DFS
      function helper(node) {
        let treeNode = new TreeNode(node.val);
        if (node.children && node.children.length > 0) {
          let preChildNode = helper(node.children[0]);
          treeNode.left = preChildNode;
          for (let i = 1; i < node.children.length; i++) {
            let nextNode = helper(node.children[i]);
            preChildNode.right = nextNode;
            preChildNode = nextNode;
          }
        }
        return treeNode;
      }
      return helper(root);
    };
  
    // Decodes your binary tree to an n-ary tree.
    decode = function (root) {
      if (!root) {
        return null;
      }
      function helper(node, parent) {
        let nArrayNode = new Node(node.val, []);
        if (parent) {
          parent.children.push(nArrayNode);
        }
        if (node.left) {
          helper(node.left, nArrayNode);
        }
        // handle siblings
        if (node.right) {
          helper(node.right, parent);
        }
  
        return nArrayNode;
      }
      return helper(root);
    };
  }
