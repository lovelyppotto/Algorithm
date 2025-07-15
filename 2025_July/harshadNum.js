// 프로그래머스 - 하샤드 수

function solution(x) {
  const sum = x.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  return x % sum === 0;
}