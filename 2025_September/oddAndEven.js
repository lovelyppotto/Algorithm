// 프로그래머스 - 짝수 홀수 개수
function solution(num_list) {
  let evens = 0;
  let odds = 0;
  
  num_list.forEach(num => {
    if (num % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  });
  
  return [evens, odds];
}