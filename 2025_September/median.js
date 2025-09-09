// 프로그래머스 - 중앙값 구하기

function solution(array) {
  const sorted = array.sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}