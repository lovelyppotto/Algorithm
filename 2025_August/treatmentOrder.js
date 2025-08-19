// 프로그래머스 - 진료 순서 정하기

function solution(emergency) {
  // 응급도를 내림차순으로 정렬한 배열
  const sortedEmergency = [...emergency].sort((a, b) => b - a);
  
  // 각 응급도의 순위 매핑
  const rank = new Map();
  sortedEmergency.forEach((value, index) => {
    // 0부터 시작하는 인덱스에 1을 더하여 순위를 매김
    rank.set(value, index + 1);
  });
    
  // 원배열의 각 요소를 순위로 변환
  return emergency.map(value => rank.get(value));
}