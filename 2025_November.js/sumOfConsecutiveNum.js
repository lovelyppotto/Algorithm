// 프로그래머스 - 연속된 수의 합

function solution(num, total) {
  const start = (total - num * (num - 1) / 2) / num;
  
  const answer = [];
  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }
  return answer;
}