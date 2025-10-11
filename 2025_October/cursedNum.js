// 프로그래머스 - 저주의 숫자

function solution(n) {
  let count = 0;
  let num = 0;
  
  while (num < n) {
    count++;
    if (count % 3 === 0 || count.toString().includes('3')) {
      continue;
    }
    num++;
  }
  return count;
}