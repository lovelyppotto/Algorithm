// 프로그래머스 - 이어 붙인 수

function solution(num_list) {
  let odd = '';
  let even = '';

  for (n of num_list) {
    if (n % 2 === 0) {
      even += n;
    } else {
      odd += n;
    }
  }
  
  return Number(odd) + Number(even);
}