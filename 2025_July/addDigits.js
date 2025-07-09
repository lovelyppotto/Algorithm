function solution(n) {
  let str = n.toString();
  let arr = str.split('').map(Number); // 문자열을 숫자 배열로 변환
  return arr.reduce((a, b) => (a + b))  // 배열의 모든 숫자를 더한 값 반환
}