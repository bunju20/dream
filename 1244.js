var Leaderboard = function() {
    this.map = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
var Leaderboard = function() {
    this.map = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if(playerId in this.map){
        this.map[playerId] += score;
    }
    else this.map[playerId] = score;
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let ar = [];
    for(let [key,val] of Object.entries(this.map)){
        ar.push(val);
    }
    ar.sort((a,b) => a - b);
    console.log(ar)
    let sum = 0;
    for(let i = 0; i < K; i++){
        sum += ar.pop();
    }
    return sum;

};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.map[playerId] = 0;
};