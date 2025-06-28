// 프로그래머스 - 나머지가 1이 되는 수 찾기

function solution(n) {
  let num = 2; // 1부터 시작할 경우 나머지가 항상 0이기때문문
  while(n % num != 1) {
      num += 1;
  }
  return num;
}