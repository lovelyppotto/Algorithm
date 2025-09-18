// 프로그래머스 - 최소직사각형

function solution(sizes) {
  let maxLong = 0;
  let maxShort = 0;
  
  for (let [w, h] of sizes) {
    let long = Math.max(w, h);
    let short = Math.min(w, h);
    maxLong = Math.max(maxLong, long);
    maxShort = Math.max(maxShort, short);
  }
  
  return maxLong * maxShort;
}