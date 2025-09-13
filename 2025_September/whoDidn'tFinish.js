// 프로그래머스 - 완주하지 못한 선수

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  // 정렬된 요소 비교하면 쉽게 비교 가능
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i]
  }

}

// map 활용한 방법(순회 1회만 하므로 효율적이며 동명이인 처리 빠름)
function solution2(participant, completion) {
  // 참가자 map 객체 생성
  const map = new Map();

  participant.forEach(player => {
    // 참가자 목록별로 모두 1(달리는 중 상태) 부여함
    map.set(player, (map.get(player) || 0) + 1)
  });
  console.log(map)

  completion.forEach(player => {
    // 완주자는 참가자 목록에서 카운트 뺌
    map.set(player, map.get(player) - 1)
  })
  console.log(map)

  for (let [player, cnt] of map) {
    if (cnt > 0) return player
  }
}

console.log(solution2(["leo", "kiki", "eden"], ["kiki", "eden"]))

