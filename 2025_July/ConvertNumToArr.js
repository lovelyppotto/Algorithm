// 프로그래머스 - 자연수 뒤집어 배열로 만들기

function solution(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n % 10); // n의 마지막 자리수를 배열에 추가
    n = Math.floor(n / 10); // n을 10으로 나눈 몫으로 갱신
  }
  return arr;
}