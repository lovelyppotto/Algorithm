// 프로그래머스 - 내적

function solution(a, b) {
  // acc - 누산기
  // cur - 현재 값
  // idx - 현재 인덱스
  // src - 원본 배열(해당 문제에서 사용하지 않음)
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}