// 프로그래머스 - 삼각형의 완성조건

function solution(sides) {
  const a = Math.min(...sides);
  const b = Math.max(...sides);
  
  // b가 가장 긴 변인 경우
  const case1 = b - (b - a);  // = a
  
  // x가 가장 긴 변인 경우
  const case2 = (a + b - 1) - b;  // = a - 1
  
  // 전체 경우의 수
  return case1 + case2;
}
