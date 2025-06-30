// 프로그래머스 - 수박수박수박수박수박수?

function solution(n) {
  const watermelon = "수박"

  if (n % 2 == 0) {
    return watermelon.repeat(n / 2);
  }
  else return watermelon.repeat(n / 2) + "수";
}