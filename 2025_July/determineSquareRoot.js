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

function solution6(n) {
  if (n === 0) return 1;
  if (n === 1) return 4;
  
  let left = 1, right = Math.floor(n / 2);
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;
    
    if (square === n) {
      return (mid + 1) ** 2;
    } else if (square < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
