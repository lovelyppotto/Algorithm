// 프로그래머스 - 등수 매기기

function solution(score) {
  // 학생의 평균 점수
  const averages = score.map(([eng, math]) => (eng + math) / 2);
  const ranks = averages.map(avg => {
    return averages.filter(otherAvg => otherAvg > avg).length + 1;
  });
  return ranks;
}
