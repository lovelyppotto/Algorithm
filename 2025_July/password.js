// 프로그래머스 - 시저 암호

function solution (s, n) {
  // 각 문자를 n만큼 이동
  return s.split('').map(c => {
    // 공백 유지
    if (c === ' ') return c;
    const code = c.charCodeAt(0);
    const base = c >= 'a' ? 97 : 65;
    return String.fromCharCode(((code - base + n) % 26) + base);
  }).join('');
} 