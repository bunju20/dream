/*
I: 
O:
C:
0 <= timestamp <= 10^9
Every timestamp will be passed in non-decreasing order (chronological order).
1 <= message.length <= 30
At most 10^4 calls will be made to shouldPrintMessage.

E: x

ds: queue , hash ,map
algo: 

solution:

*/
var Logger = function() {
    this.map = new Map()  
   };
   
   Logger.prototype.shouldPrintMessage = function(timestamp, message) {
   
       if (this.map.has(message)) {        
           if (timestamp < this.map.get(message) + 10) {
               return false
           }
       }
       this.map.set(message, timestamp)
       return true  
   };
   