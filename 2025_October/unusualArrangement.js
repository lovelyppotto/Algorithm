// 프로그래머스 - 특이한 정렬

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const distA = Math.abs(a - n);
    const distB = Math.abs(b - n);
    
    // 거리가 다를 경우
    if (distA !== distB) {
      // 가까운 순서대로
      return distA - distB;
    }
    // 거리가 같으면 큰 수를 앞에 위치
    return b - a;
  });
}