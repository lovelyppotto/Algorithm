// 프로그래머스 - 핸드폰 번호 가리기

function solution(phone_number) {
  const length = phone_number.length;
  return '*'.repeat(length - 4) + phone_number.slice(-4);
}