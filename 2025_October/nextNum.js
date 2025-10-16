// 프로그래머스 - 다음에 올 숫자

function solution(common) {
  const n = common.length;

  const diff1 = common[1] - common[0];
  const diff2 = common[2] - common[1];
  
  if (diff1 === diff2) {
    return common[n - 1] + diff1;
  } else {
    const ratio = common[1] / common[0];
    return common[n - 1] * ratio;
  }
}