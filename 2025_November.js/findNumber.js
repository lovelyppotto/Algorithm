// 프로그래머스 - 숫자 찾기

function solution(num, k) {
  const numStr = String(num);
  const kStr = String(k);
  const index = numStr.indexOf(kStr);
  return index !== -1 ? index + 1 : -1;
}