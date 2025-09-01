// 프로그래머스- 피자 나눠 먹기(3)

function solution(slice, n) {
  // Math.ceil(): 올림 함수. 주어진 수보다 크거나 같은 가장 작은 정수 반환
  return Math.ceil(n / slice);
}