// 프로그래머스 - 삼각형의 완성조건(1)

function solution(sides) {
  if (Math.max(...sides) < sides.reduce((a, b) => a + b) - Math.max(...sides)) {
    return 1;
  }
  return 2;
}