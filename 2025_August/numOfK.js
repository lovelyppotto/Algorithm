// 프로그래머스 - k의 개수

function solution(i, j, k) {
  let result = 0;
  for (let l = i; l <= j; l++) {
    let str = l.toString();
    // 동적으로 생성된 정규 표현식으로 k의 등장 횟수를 세기
    const matches = str.match(new RegExp(k, 'g'));
    // matches가 null일 경우 0을 반환하고, 그렇지 않으면 matches의 길이를 반환
    result += matches ? matches.length : 0;
  }
  return result;
}