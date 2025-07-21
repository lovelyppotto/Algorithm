// 프로그래머스 - 정수 내림차순으로 배치하기

function solution(n) {
  const arr = String(n).split('');
  arr.sort((a, b) => b - a);

  return parseInt(arr.join(''), 10);
}