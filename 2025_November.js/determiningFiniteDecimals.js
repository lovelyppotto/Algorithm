// 프로그래머스 - 유한소수 판별하기

function solution(a, b) {
  function gcd(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }
  
  const divisor = gcd(a, b);
  const reducedB = b / divisor;
  let denom = reducedB;

  while (denom % 2 === 0) {
    denom /= 2;
  }
  while (denom % 5 === 0) {
    denom /= 5;
  }
  return denom === 1 ? 1 : 2;
}