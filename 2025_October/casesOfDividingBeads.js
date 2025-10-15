// 프로그래머스 - 구슬을 나누는 경우의 수 

function solution(balls, share) {
  // 팩토리얼
  function factorial(n) {
    if (n <= 1) return 1n;
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // 조합
  const n = BigInt(balls);
  const r = BigInt(share);
  
  const result = factorial(n) / (factorial(r) * factorial(n - r));
  
  return Number(result);
}