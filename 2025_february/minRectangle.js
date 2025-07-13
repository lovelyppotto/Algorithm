function solution(sizes) {
  let small = [];
  let large = [];

  for (let i = 0; i<sizes.length; i++) {
    const rectangle = [sizes[i][0], sizes[i][1]];
    if (rectangle[0] <= rectangle[1]) {
      small.push(rectangle[0])
      large.push(rectangle[1])
    } else if (rectangle[1] < rectangle[0]) {
      small.push(rectangle[1])
      large.push(rectangle[0])
    } 
  }
  small.sort((a, b) => b - a);
  large.sort((a, b) => b - a);

  return small[0] * large[0];
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))