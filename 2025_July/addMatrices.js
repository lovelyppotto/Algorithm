// 프로그래머스 - 행렬의 덧셈

function solution(arr1, arr2) {
  let arr = [[]];
  for (let i=0; i < arr1.length; i++) {
    arr[i] = [];
    for (let j=0; j < arr1[0].length; j++) {
      arr[i][j] =  arr1[i][j] + arr2[i][j]
    }
  }
  return arr;
}

// 다른 풀이

function solution(arr1, arr2) {
  // map 함수 활용
  return arr1.map((row, i) => row.map((v, j) => v + arr2[i][j]));
} 