// 프로그래머스 - 다항식 더하기

function solution(polynomial) {
  const terms = polynomial.split(' + ');
  
  let xCoeff = 0;  // x의 계수
  let constant = 0; // 상수항
  
  for (const term of terms) {
    if (term.includes('x')) {
      // x항
      const coeff = term.replace('x', '');
      if (coeff === '' || coeff === '+') {
        xCoeff += 1;
      } else if (coeff === '-') {
        xCoeff -= 1;
      } else {
        xCoeff += parseInt(coeff);
      }
    } else {
      // 상수항
      constant += parseInt(term);
    }
  }
  
  // 결과 문자열
  const result = [];
  
  if (xCoeff !== 0) {
    if (xCoeff === 1) {
      result.push('x');
    } else if (xCoeff === -1) {
      result.push('-x');
    } else {
      result.push(xCoeff + 'x');
    }
  }
  
  if (constant !== 0) {
    result.push(constant.toString());
  }
  return result.join(' + ');
}