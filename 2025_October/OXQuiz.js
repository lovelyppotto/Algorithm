function solution(quiz) {
  return quiz.map(equation => {
    const parts = equation.split(' ');
    const X = parseInt(parts[0]);
    const operator = parts[1];
    const Y = parseInt(parts[2]);
    const Z = parseInt(parts[4]);
    
    // 계산
    let result;
    if (operator === '+') {
      result = X + Y;
    } else if (operator === '-') {
      result = X - Y;
    }
    // 결과 확인
    return result === Z ? "O" : "X";
  });
}