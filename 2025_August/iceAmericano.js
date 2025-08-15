// 프로그래머스 - 아이스 아메리카노

function solution(money) {
  let answer = [];
  answer.push(Math.floor(money / 5500)); // 아이스 아메리카노 개수
  answer.push(money % 5500); // 남은 돈
  return answer;
}