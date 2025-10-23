// 프로그래머스 - 수열과 구간 쿼리(3)

function solution(arr, queries) {
  for (let query of queries) {
    const [i, j] = query;
    // 값 교환
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}