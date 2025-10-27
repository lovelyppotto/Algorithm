// 프로그래머스 - 잘라서 배열로 저장하기

function solution(my_str, n) {
  const result = [];
  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }
  return result;
}