// 프로그래머스 - 주식 가격

function solution(prices) {
  const result = new Array(prices.lenght).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const index = stack.pop();
      result[index] = i - index; // 떨어지지 않은 기간
    }
    stack.push(i); // 현재 인덱스를 스택에 추가
  }
  
  // 스택에 남은 것들은 끝까지 떨어지지 않은 가격
  while (stack.length > 0) {
    const index = stack.pop();
    result[index] = prices.length - 1 - index;
  }
    
  return result;
}