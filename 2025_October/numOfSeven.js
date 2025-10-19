// 프로그래머스 - 7의 개수

function solution(array) {
  return array.join('').split('7').length - 1;
}