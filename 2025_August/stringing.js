// 프로그래머스 - 문자열 묶기

function solution(strArr) {
  const lengthCnt = {};

  for (let str of strArr) {
    const length = str.length;
    // 값이 없을(NaN) 경우 0으로 초기화하여 1 카운팅
    // 객체의 경우 값이 없을 때 undefined가 반환됨
    lengthCnt[length] = (lengthCnt[length] || 0) + 1;
  }

  // Math.max()는 개별 숫자를 받아야 하는 메서드이므로 전개연산자 사용하지 않을 경우 NaN 반환됨
  return Math.max(...Object.values(lengthCnt));
}