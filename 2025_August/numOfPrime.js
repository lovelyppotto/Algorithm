// 프로그래머스 - 소수 개수 구하기

function solution(n) {
  let count = 0;
  
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  }
  
  return count;
}


// 상세 풀이
function solution(n) {
  let count = 0;
  // 2부터 n까지 각 숫자 확인
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function isPrime(num) {
  if (num < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // 나누어떨어지므로 소수가 아님
    }
  }
  return true; // 나누어떨어지는 수가 없으면 소수
}