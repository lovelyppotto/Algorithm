// 프로그래머스 - 최빈값 구하기

function solution(array) {
  const nums = {}

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    nums[num] = (nums[num] ?? 0) + 1;
  }

  // 최빈값 횟수
  let maxCount = 0;
  for (let key in nums) {
    if (nums[key] > maxCount) {
      maxCount = nums[key];
    }
  }
  
  let mode = -1;
  let modeCount = 0;
  for (let key in nums) {
    if (nums[key] === maxCount) {
      modeCount++;
      mode = Number(key);
    }
  }
  return modeCount > 1 ? -1 : mode;
}