// 프로그래머스 - 개미 군단

function solution(hp) {
  let count= 0;
  while (hp > 0) {
    if (hp >= 5) {
      count += Math.floor(hp / 5);
      hp %= 5;
    } else if (hp >= 3) {
      count += Math.floor(hp / 3);
      hp %= 3;
    } else {
      count += hp;
      break;
    }
  }
  return count;
}