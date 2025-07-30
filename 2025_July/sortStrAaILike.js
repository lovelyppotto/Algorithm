// 프로그래머스 - 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  return strings.sort((a, b) => {
    // 전체 문자열 비교 가능한 메서드 localeCompare 활용
    // n번째 문자가 다르면 그 기준으로, 같으면 전체 문자열 비교
    return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
  });
}