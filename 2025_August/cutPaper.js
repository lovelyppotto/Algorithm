// 프로그래머스 - 종이 자르기 

function solution(M, N) {
  // 겹쳐서 자를 수 없으므로 항상 총 면적에서 -1한 값이 최소 가위질 횟수
  return M * N -1
}