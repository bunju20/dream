/*
인터벌 문젠데 나는 어케 생각하냐면
[[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
1 3/ 2,4 /2,5 / 6,7 / 9,12

1:5
6:7
9:12

45 79

1 : 3
4: 10
*/

var employeeFreeTime = function(schedule) {
    
    let ar = [];
    let map = {};
    let result = [];

    for(let i = 0; i < schedule.length; i++){
        for(let j = 0; j < schedule[i].length; j++){
            let inter = schedule[i][j];
            ar.push([inter.start,inter.end]);
        }
    }
    ar.sort((a,b)=> a[0] - b[0]);


    map[ar[0][0]] = ar[0][1];
    let lastVal = ar[0][1];
    let lastKey = ar[0][0];
    for(let i = 1; i < ar.length; i++){
        let [from,to] = ar[i];
        if(lastVal > to)continue;
        else if(from <= lastVal) map[lastKey] = to;
        else{
            map[from] = to;
            lastKey = from;
        }
        lastVal = to;
    }
    
    
    let memo = -1;
    let key = 0;
    for(let [from, to] of Object.entries(map)){
        if(memo === -1)memo = to;
        else{
            key = parseInt(from);
            let inter = new Interval(memo,key);
            result.push(inter);
            memo = to;
        }

    }
    
    
    return result;

};