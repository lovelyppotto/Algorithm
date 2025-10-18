// 프로그래머스 - 공 던지기

function solution(numbers, k) {
  let idx = 0;
  
  for (let i = 1; i < k; i++) {
    idx = (idx + 2) % numbers.length;
  }
  return numbers[idx];
}