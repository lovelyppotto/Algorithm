// 프로그래머스 - 최댓값 만들기 (2)

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  
  const max1 = numbers[0] * numbers[1];
  const max2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  
  return Math.max(max1, max2);
}