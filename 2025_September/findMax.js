// 프로그래머스 - 가장 큰 수 찾기

function solution(array) {
  // Math.max는 배열을 인자로 받지 않으므로 스프레드 연산자(...)를 사용
  const mx = Math.max(...array);
  // indexOf는 가장 첫번째로 나오는 값의 인덱스를 반환
  const maxIdx = array.indexOf(mx);
  return [mx, maxIdx];
}