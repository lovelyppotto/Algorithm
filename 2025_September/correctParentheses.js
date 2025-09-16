// 프로그래머스 - 올바른 괄호

function solution(s){
  const stack = [];

  for (let char of s) {
    // '(' 만 스택에 넣으므로 ')'일때만 스택에서 pop 해주면 검증됨
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
    return stack.length === 0;
}

console.log(solution(')()()')); // false
console.log(solution('(())()')); // true
console.log(solution('()()')); // true
console.log(solution('(()(')); // false
console.log(solution('())((()))(()')); // false