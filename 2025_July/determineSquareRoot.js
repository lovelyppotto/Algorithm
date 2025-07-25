// 프로그래머스 - 정수 제곱근 판별

function solution(n) {
  // n의 제곱근
  // Math.sqrt() - 숫자의 제곱근 반환하는 함수
  let sqrt = Math.sqrt(n);
  
  // 제곱근이 정수인지 확인
  if (sqrt === Math.floor(sqrt)) {
    // 완전제곱수라면 (sqrt + 1)의 제곱 반환
    return (sqrt + 1) * (sqrt + 1);
  } else {
    return -1;
  }
}