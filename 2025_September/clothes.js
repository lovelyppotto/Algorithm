// 프로그래머스 - 의상

// function solution(clothes) {
//   let answer = 0;
//   const map = new Map();
//   // 해시 생성
//   for (let i = 0; i < clothes.length; i++) {
//     // console.log(clothes[i])
//     map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1)
//   }
//   // 경우의 수 구하기
//   // 해당 파츠를 입거나 안 입는 선택지 있음
//   for (let value of map.values()) {
//     if (answer !== 0) {
//       answer *= value + 1
//     } else answer += value + 1
//     // console.log(answer)
//   }
//   // 아무것도 안 입을 수 없으므로 해당 경우 제외 (-1)
//   return answer - 1
// }

function solution(clothes) {
  // 어차피 곱연산 사용하므로 1부터 시작해도 됨
  let answer = 1;
  const map = new Map();
  // 해시 생성
  for (let i = 0; i < clothes.length; i++) {
    map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1)
  }
  // 경우의 수 구하기
  // 해당 파츠를 입거나 안 입는 선택지 있음
  for (let value of map.values()) {
    answer *= value + 1
    // console.log(answer)
  }
  // 아무것도 안 입을 수 없으므로 해당 경우 제외 (-1)
  return answer - 1
}
solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))