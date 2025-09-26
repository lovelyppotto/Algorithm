// 프로그래머스 - 피로도

// 피로도 사용으로 던전 탐험 가능
// 최소 필요 피로도(던전 탐험용) 및 소모 피로도(던전 탐험 후) 존재
// 최소 필요 피로도가 k에 가까운 것 위주로 먼저 본 후 같으면 소모 피로도 낮은 순으로 탐색
// 일단 정렬한 후 차례대로 세어보기? (안됨)

// function solution(k, dungeons) {
//   let currentFatigue = k;
//   let count = 0;
  
//   dungeons.sort((a, b) => {
//     if(a[0] === b[0]) return a[1] - b[1];
//     else return b[0] - a[0];
//   });
  
//   for (let i=0; i < dungeons.length; i++) {
//     if (dungeons[i][0] <= currentFatigue) {
//       currentFatigue -= dungeons[i][1];
//       count += 1;
//     }
//   }
//   console.log(count);
// }

// 백트래킹 활용
function solution(k, dungeons) {
  let maxCount = 0;
  // 백트래킹용 배열 생성 
  // new Array(길이).fill(전체 채울 요소)
  const visited = new Array(dungeons.length).fill(false);

  function dfs(currentK, count) {
    // 재귀하면서 갱신할 maxCount
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [need, use] = dungeons[i];

      // 아직 방문하지 않았고 && 요구치에 충족하면
      if (!visited[i] && currentK >= need) {
        // 방문처리 후
        visited[i] = true;
        // 해당 상태 그대로 재귀(피로도 줄인 후 카운트 올려서)
        dfs(currentK - use, count + 1);
        // 원상태로 돌림
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return maxCount;
}

console.log(solution(80, [[30,10],[50,40],[80,20]]));