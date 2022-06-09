class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function intersections(intervals_a, intervals_b) {
  let result = [];
  i = 0, j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the other interval_b[j]
    // so an overlap is like being contained within the other
    // case 5
    let a_overlaps_b = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;

    // check intervals_a[j] start time lies within intervals_b[i]
    // case 3
    let b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;

    // store the intersection part
    if (a_overlaps_b || b_overlaps_a) {
      results.push(new Interval(
        // The start
        Math.max(intervals_a[i].start, intervals_b[j].start),
        // the end
        Math.min(intervals_a[i].end, intervals_b[j].end)
      ));
    }

    // Move next from which interval is finishing first
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1; // case 2, case 5
    } else {
      j += 1; // case 3, case 4
    }
  }
  return result;
}
