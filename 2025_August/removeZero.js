// 프로그래머스 - 0 떼기

function solution(n_str) {
  let result = '';
  for (let i = 0; i < n_str.length; i++) {
    // 뒤에 있는 0이 제거되지 않도록 result의 길이가 1 이상일때도 추가함
    if (n_str[i] !== '0' || result.length > 0) {
      result += n_str[i];
    }
  }
  return result;
}