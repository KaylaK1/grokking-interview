class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function insert(intervals, new_interval) {
  let merged = [],
      i = 0;
  // skip intervals that end before new_interval
  // we also need to add them to the new output
  while(i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i+= 1;
  }

  // merge all intervals that overlap the new interval
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].start, new_interval.end);
    i += 1;
  }
  // insert the new interval
  merged.push(new_interval);

  // add the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }
  return merged;
}
