// 프로그래머스 - 약수의 개수와 덧셈

function solution(left, right) {
  // 약수의 개수 세는 함수
  function cntDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        count += (i * i === n) ? 1 : 2;
      }
    }
    return count;
  }
  
  let result = 0;
  for (let i = left; i <= right; i++) {
    const divisors = cntDivisors(i);
    if (divisors % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }
  
  return result;
}