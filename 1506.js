/*

*/

const findRoot = function(tree) {
    let allChildren = new Set();
    for(let node of tree) {
        for(let child of node.children) {
            allChildren.add(child.val);
        }
    }
    
    for(let node of tree) {
        // If a node is not the child of any other node it is the root
        if(!allChildren.has(node.val)) return node;
    }

};