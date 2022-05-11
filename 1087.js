/*
I: string
O: string배열
C:
1 <= s.length <= 50 => 8개 이상 {}이 발생할수 없음 N^M이래도 된다는 거.
s consists of curly brackets '{}', commas ',', and lowercase English letters.
s is guaranteed to be a valid input.
There are no nested curly brackets.
All characters inside a pair of consecutive opening and ending curly brackets are different.
E:
if(s.legnth === 1)return [s[0]];

ds: x
algo: x
solution:
단어의 길이: N
time: N^N
space: N^M

s:받는 문자열
path: 현재의 배열
res: 반환할 배열

*/
var expand = function(s) {
    let res = [];
    back(s,[],res);
    return res;

}

function back(curStr,curPath,res){
    if(curStr === ""){
        res.push(curPath.join('')); //N
        return;
    }

    let curAr = [];

    if(curStr[0] === "{"){
        let idx = curStr.indexOf('}');
        curAr = curStr.substring(1,idx).split(',').sort(); //N + N + NlogN
        curStr = curStr.slice(idx+1);

        for(let i = 0; i < curAr.length; i++){ //N
            curPath.push(curAr[i]);
            back(curStr,curPath.slice(),res);
            curPath.pop();
        }
    }else{
        let idx = curStr.indexOf('{');
        if(idx === -1){
            curPath.push(curStr);
            curStr = '';
        }else{
            curPath.push(curStr.slice(0,idx));
            curStr = curStr.slice(idx);
        }
        back(curStr,curPath.slice(),res);
    }
}
