/*


0 30 , 5 10 ,15 20

0                    30
   5     10
             15   20
*/
var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let inserted = false;

  let rooms = [[intervals[0]]];

  for (let i = 1; i < intervals.length; i++) {
    inserted = false;
    for (let j = 0; j < rooms.length; j++) {
      //console.log(rooms, rooms[j][rooms[j].length-1][1], intervals[i])
      if (rooms[j][rooms[j].length - 1][1] <= intervals[i][0]) {
        inserted = true;
        rooms[j].push(intervals[i]);
        break;
      }
    }
    if (!inserted) rooms.push([intervals[i]]);
  }
console.log(rooms);
  return rooms.length;
};

//#######################################################################

var minMeetingRooms = function(intervals) {
  const start = [...intervals].map(([start, end]) => start).sort((a, b) => a - b);
  const end = [...intervals].map(([start, end]) => end).sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    if (start[i] >= end[0]) end.shift();
  }
  
  return end.length;
};

/*
우선순위 큐. 
근데 자바스크립트엔 없어서 못씀.

class Solution {
    public int minMeetingRooms(int[][] intervals) {
        
    // Check for the base case. If there are no intervals, return 0
    if (intervals.length == 0) {
      return 0;
    }

    // Min heap
    PriorityQueue<Integer> allocator =
        new PriorityQueue<Integer>(
            intervals.length,
            new Comparator<Integer>() {
              public int compare(Integer a, Integer b) {
                return a - b;
              }
            });

    // Sort the intervals by start time
    Arrays.sort(
        intervals,
        new Comparator<int[]>() {
          public int compare(final int[] a, final int[] b) {
            return a[0] - b[0];
          }
        });

    // Add the first meeting
    allocator.add(intervals[0][1]);

    // Iterate over remaining intervals
    for (int i = 1; i < intervals.length; i++) {

      // If the room due to free up the earliest is free, assign that room to this meeting.
      if (intervals[i][0] >= allocator.peek()) {
        allocator.poll();
      }

      // If a new room is to be assigned, then also we add to the heap,
      // If an old room is allocated, then also we have to add to the heap with updated end time.
      allocator.add(intervals[i][1]);
    }

    // The size of the heap tells us the minimum rooms required for all the meetings.
    return allocator.size();
  }
}
*/