// 프로그래머스 - 외계행성의 나이

function solution(age) {
  // 숫자를 알파벳으로 매핑하는 객체
  const alphabet = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j'
  };
    
  // 나이를 문자열로 변환 후 각 자릿수를 알파벳으로 변환
  return age.toString().split('').map(digit => alphabet[digit]).join('');
}