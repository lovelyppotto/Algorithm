// 프로그래머스 - 최댓값 만들기(1)

function solution(numbers) {
  let sortNums = numbers.sort((a, b) => a - b);
  return sortNums[sortNums.length - 1] * sortNums[sortNums.length - 2];
}