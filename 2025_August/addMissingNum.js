// 프로그래머스 - 없는 숫자 더하기

function solution(numbers) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const missingNums = nums.filter(num => !numbers.includes(num));
  return missingNums.reduce((sum, num) => sum + num, 0);
} 