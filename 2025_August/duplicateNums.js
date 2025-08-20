// 프로그래머스 - 중복된 숫자 개수

function solution(array, n) {
  // filter(): 주어진 배열에서 함수 테스트를 통과한 요소에 대한 얕은 복사본 생성
  return array.filter(num => num === n).length;
}