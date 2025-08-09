// 프로그래머스 - 머쓱이보다 키 큰 사람

function solution(array, height) {
  return array.filter(person => person > height).length;
}