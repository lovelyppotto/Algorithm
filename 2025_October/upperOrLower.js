// 프로그래머스 - 대문자와 소문자

function solution(my_string) {
  return my_string.split('').map(char => 
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}