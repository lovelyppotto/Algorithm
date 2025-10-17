// 프로그래머스 - 분수의 덧셈 

function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  
  // 최대공약수
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  
  // 최대공약수로 기약분수로 변환
  const divisor = gcd(numer, denom);
  
  return [numer / divisor, denom / divisor];
}
