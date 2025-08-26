// 프로그래머스 - 특정 문자 제거하기

function solution(my_string, letter) {
  return my_string.split(letter).join('');
}