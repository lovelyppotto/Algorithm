// 프로그래머스 - 예산

function solution(d, budget) {
  let count = 0;
  let totalSpent = 0;
  
  // 신청 금액을 오름차순으로 정렬
  d.sort((a, b) => a - b);
  
  // 가장 적은 금액부터 지원
  for (let i = 0; i < d.length; i++) {
    if (totalSpent + d[i] <= budget) {
      totalSpent += d[i];
      count++;
    } else {
      // 예산초과
      break;
    }
  }
  return count;
}