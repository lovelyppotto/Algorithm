function solution(arr) {
  const minIndex = arr.indexOf(Math.min(...arr)); // 최소값을 가진 인덱스 찾기
  arr.splice(minIndex, 1); // 최소값을 배열에서 제거

  if (arr.length <= 1) {
    return [-1];
  }
  else return arr;
}