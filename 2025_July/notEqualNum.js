// 프로그래머스 - 같은 숫자는 싫어

function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // 이전 값과 다를 때 결과에 추가
    if (arr[i] !== result[result.length -1]) {
      result.push(arr[i]);
    }
  }
  return result;
}