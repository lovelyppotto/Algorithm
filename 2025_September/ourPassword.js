// 프로그래머스 - 둘만의 암호

function solution(s, skip, index) {
  let result = '';
  const skipChar = skip.split('')
  console.log(skipChar);
  for (let i=0; i<s.length; i++) {
    let code = s[i].charCodeAt();
    let j = 0;
    while (j < index){
      code += 1;
      if (code > 122) {
        code =  (code % 122) + 96;
      }
      if (!skipChar.includes(String.fromCharCode(code))) {
        j += 1;
      }
    }
    result += String.fromCharCode(code);
  }
  return result;
}

console.log(solution("aukks", "wbqd", 5));