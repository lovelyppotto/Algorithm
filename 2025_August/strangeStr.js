// 프로그래머스 - 이상한 문자 만들기

function solution(s) {
  const arr = s.split(' ');

  const words = arr.map(word => {
    let result = '';

    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        result += word[i].toUpperCase();
      } else {
        result += word[i].toLowerCase();
      }
    }

    return result;
  });

  return words.join(' ');
}