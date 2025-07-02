// 프로그래머스 - 가운데 글자 가져오기

function solution(s) {
  const len = s.length;
  const arr = s.split('');
  if (len % 2 === 0) {
    return arr[Math.floor(len / 2 - 1)] + arr[Math.floor(len / 2)];
  } else {
    return arr[Math.floor(len / 2)];
  }
}

// substring 사용
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substring(mid - 1, mid + 1) : s[mid];
}