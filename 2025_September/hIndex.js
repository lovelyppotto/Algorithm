// 프로그래머스 - H-Index

function solution(citations) {
  let h = 0;
  const sortArr = citations.sort((a, b) => b - a);
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] >= i + 1) h = i + 1
    else break;
  }
  return h;
}

console.log(solution([3, 4]));
console.log(solution([1, 2, 3, 5, 6, 7, 10, 11]));