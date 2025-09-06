// 프로그래머스 - 크기가 작은 부분문자열

function solution(t, p) {
  let cnt = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    // substring(시작 인덱스, 종료 인덱스)
    // 종료 인덱스는 부분 문자열에서 제외된다
    // substr의 경우 길이를 기준으로 자름
    if (t.substring(i, i + p.length) <= p) {
      cnt++;
    }
  }
  return cnt;
}