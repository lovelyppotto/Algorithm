// 프로그래머스 - 약수의 합

function solution(n) {
  // 1부터 n까지의 숫자 중에서 n의 약수를 찾아서 그 합을 반환
  return Array.from({ length: n }, (_, i) => i + 1)
    .filter(i => n % i === 0)
    .reduce((acc, cur) => acc + cur, 0);  
}