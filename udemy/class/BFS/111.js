var minDepth = function(root) {
    if(!root)return 0;
    let queue = [[root,1]];

    while(queue.length){
        let [curNode,level] = queue.shift();
        if(!curNode.left && !curNode.right)return level;
        if(curNode.left)queue.push([curNode.left,level+1]);
        if(curNode.right)queue.push([curNode.right,level+1]); 
    }
};