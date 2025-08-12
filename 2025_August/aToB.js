// 프로그래머스 - A로 B 만들기

function solution(before, after) {
  // 두 정렬 결과가 같다면 반드시 after를 만들 수 있음
  if (before.split('').sort().join('') === after.split('').sort().join('')) {
    return 1;
  }
  return 0;
}