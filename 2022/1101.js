/*
Union-Find (합집합 찾기)
-두개의 노드를 선택해서 이 노드가 같은 그래프에 속하는지 판별하는 알고리즘

연결되지 않은 노드들이 있다고 치자.
더 작은값을 부모로 가지도록 만들어주는 것.
Union (합침 이라는 뜻.)

부모가 모두 1이르모 세가지의 노드는 모두 같은 그래프에 있다고 판단할수 있다.


CODE //부모노드를 찾는 함수
해당 부모의 값과 같으면 x 자체를 반환하고 - end clause
둘이 다르면 실제를 찾기위해서 재귀를 돌려준다.

CODE //부모노드를 합치는 함수
각의 부모값을 구한뒤에
더 작은 값 쪽으로 부모를 합쳐준다.

CODE //같은 부모를 가지는지 확인함.
둘이 같으면 1반환
아니면 0반환..



*/
var earliestAcq = function(logs, N) {
    logs.sort((a,b) => a[0] - b[0]); //오름차순으로 정렬.

    const ids = [], size = [];
    for(let i = 0; i < N; i++) { ids.push(i); size.push(1); }

    for(let log of logs) {
        const root1 = find(log[1],ids); //최대의 부모 노드 값 받아옴.
        const root2 = find(log[2],ids);

        if (root1 != root2) {
            union(root1, root2,size,ids); //합쳐줌
            if (--N == 1)
                return log[0];
        }
    }
    return -1;
};

const union = (root1, root2,size,ids) => {
    if (size[root2] > size[root1]) union(root2, root1 , size, ids);
    ids[root2] = root1;
    size[root1] += size[root2];
}

const find = (id,ids) => {
    while (ids[id] != id) {
        ids[id] = ids[ids[id]];
        id = ids[id];
    }
    return id;
}