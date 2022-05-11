/*
Union-Find (합집합 찾기)
-두개의 노드를 선택해서 이 노드가 같은 그래프에 속하는지 판별하는 알고리즘

연결되지 않은 노드들이 있다고 치자.
더 작은값을 부모로 가지도록 만들어주는 것.
Union (합침 이라는 뜻.)

부모가 모두 1이르모 세가지의 노드는 모두 같은 그래프에 있다고 판단할수 있다.



*/
var earliestAcq = function(logs, N) {
    logs.sort((a,b) => a[0] - b[0]);

    const ids = [], size = [];
    for(let i = 0; i < N; i++) { ids.push(i); size.push(1); }
    
    const union = (root1, root2) => {
        if (size[root2] > size[root1]) union(root2, root1);
        ids[root2] = root1;
        size[root1] += size[root2];
    }
    
    const find = (id) => {
        while (ids[id] != id) {
            ids[id] = ids[ids[id]];
            id = ids[id];
        }
        return id;
    }
    
    for(let log of logs) {
        const root1 = find(log[1]);
        const root2 = find(log[2]);
        if (root1 != root2) {
            union(root1, root2);
            if (--N == 1)
                return log[0];
        }
    }
    return -1;
};