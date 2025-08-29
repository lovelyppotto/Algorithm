// 프로그래머스 - 컨트롤 제트

function solution(s) {
  const stack = [];
  const arr = s.split(' ');
  
  for (let n of arr) {
    if (n === 'Z') {
      stack.pop(); // Z를 만나면 스택의 마지막 요소 제거
    } else {
      stack.push(Number(n));
    }
  }
  return stack.reduce((sum, num) => sum + num, 0); // 남은 요소의 합 반환
}