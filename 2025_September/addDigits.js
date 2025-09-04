// 프로그래머스 - 자릿수 더하기

function solution(n) {
  let sum = 0;
  while (n >= 1) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}