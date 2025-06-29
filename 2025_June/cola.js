// 프로그래머스 - 콜라 문제

/**
 * 
  * @param {number} a - 콜라를 받기 위해 마트에 주어야 하는 병 수
  * @param {number} b - a개의 병을 가져다 주면 마트가 주는 콜라 병 수
  * @param {number} n - 가지고 있는 콜라 병 수
 */

function solution(a, b, n) {
  let total = 0;
  let bottles = n;

  while (bottles >= a) {
    let newBottles = Math.floor(bottles / a) * b; // 새로 받은 콜라 병 수
    total += newBottles; // 총 받은 콜라 병 수 갱신
    bottles = (bottles % a) + newBottles; // 남은 병 수 갱신신
  }
  return total;
}