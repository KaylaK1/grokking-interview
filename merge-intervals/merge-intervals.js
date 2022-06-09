class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    console.log(`[${this.start}, ${this.end}]`);
  }
}

function merge(intervals) {
  // sort the array of intervals so that the earliest start idx comes first
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let start = intervals[0].start,
      end   = intervals[0].end;
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      // overlapping intervals, adjust the end
      end = Math.max(interval.end, end);
    } else {
      // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;

}

const intervals = [new Interval(1, 4), new Interval(7, 9), new Interval(2, 5)];
// console.log('before sort: ', intervals);

// //console.log(merge(intervals));
// merge(intervals);

console.log('before sort: ', intervals);
console.log('after sort: ', merge(intervals));
