// 프로그래머스 - 소인수분해

function solution(n) {
  const answer = [];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      // 중복 제거
      if (!answer.includes(i)) {
        answer.push(i);
      }
      // n을 i로 끝까지 나눔
      while (n % i === 0) {
        n = n / i;
      }
    }
  }
  return answer;
}