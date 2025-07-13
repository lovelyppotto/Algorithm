// 프로그래머스 - 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let answer = [];
  arr.sort((a, b) => a - b); // arr 을 미리 정렬
  // 나누어 떨어지는 수 찾아 배열에 추가
  for (let i = 0; i < arr.length; i++) {
    if  (arr[i] % divisor === 0 ) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}