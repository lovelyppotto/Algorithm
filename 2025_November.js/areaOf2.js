// 프로그래머스 - 2의 영역

function solution(arr) {
  const startIdx = arr.indexOf(2);
  let lastIdx = 0;

  for (let i=arr.length-1; i>=0; i--){
    if(arr[i] === 2) {
      lastIdx = i;
      break;
    }
  }
  if (arr.slice(startIdx, lastIdx+1).length === 0) return [-1]
  return arr.slice(startIdx, lastIdx+1)
}

console.log(solution([1, 2, 1]))