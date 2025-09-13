// 프로그래머스 - 폰켓몬

function solution(nums) {
  const allocate = Math.floor(nums.length / 2)
  const map = new Map();

  nums.forEach(no => {
    map.set(no, (map.get(no) || 0) + 1)
    // console.log(map)
  })
  // map.size: 맵 객체에 포함된 객체 수(길이) 반환
  return map.size <= allocate ? map.size : allocate
}

// Set 사용하는 방식(해당 방식에선 더 효율적임)
function secondSolution(nums) {
  const allocate = Math.floor(nums.length / 2)
  const phonekemons = [... new Set(nums)]
  console.log(phonekemons) // [3, 2]

  // map.size: 맵 객체에 포함된 객체 수(길이) 반환
  return phonekemons.length <= allocate ? phonekemons.length : allocate
}

const result1 = solution([3,3,3,2,2,2])
const result2 = secondSolution([3,3,3,2,2,2])

console.log(result1)
console.log(result2)