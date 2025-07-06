// 프로그래머스 - 콜라츠 추측

function solution(num) {
  let count = 0
  while (num !== 1) {
    if (count > 500) { // 500번을 초과하면 -1 반환
      return -1;
    }
    else if (num % 2 === 0 ) { // 짝수일때
      num /=2;
      count += 1
    } else { // 홀수일때
      num = (num * 3) + 1
      count += 1
    }
  }
  return count;
}