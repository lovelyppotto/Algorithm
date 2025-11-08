// 프로그래머스 - 삼총사

function solution(number) {
  let count = 0;
  const n = number.length;
  
  // 3인 선택하는 모든 조합 확인
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}