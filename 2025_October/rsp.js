// 프로그래머스 - 가위 바위 보

function solution(rsp) {
  const win = {
    '2': '0',
    '0': '5',
    '5': '2',
  };
  
  // 각 문자를 이기는 값으로 변환
  return rsp.split('').map(char => win[char]).join('');
}