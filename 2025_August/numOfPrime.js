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

// 시간 복잡도 줄이는 풀이(에라토스테네스의 체)
/**
 * 
  * 2부터 각 배수를 소수가 아닌 수로 표시하다 보면 소수만 남게 되는 점을 활용
 */
function solution(n) {
  // 모든 수를 소수라고 가정
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false; // i의 배수는 소수가 아님
      }
    }
  }
  
  return isPrime.filter(Boolean).length; // true인 값의 개수 반환
}