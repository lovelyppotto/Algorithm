// 프로그래머스 - 한 번만 등장한 문자

function solution(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    // 객체의 프로퍼티가 없을 때 undefined이므로 || 연산자로 0으로 처리함
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  return Object.keys(obj).filter((key) => obj[key] === 1).sort().join('');
}