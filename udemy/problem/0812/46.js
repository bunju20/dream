/*
             123
   1 23     2 13        3 12
12 3 13 2   21 3 23 1   31 2 32 1
123  132



*/
const permute = function(nums) {
    const result = [];
    const temp = [];
    backtracking(temp, nums, result);
    return result;
  };
  
  
  function backtracking(curAr,nums,result){
    if (!nums.length) {
        result.push([...curAr]);
        return;
      }
  
      for(let i = 0; i < nums.length; i++){
        let curNum = nums[i];
        curAr.push(curNum);
        nums.splice(i,1); 
        backtracking(curAr,nums,result);
        curAr.pop();
        nums.splice(i,0,curNum);
      }
  }
  