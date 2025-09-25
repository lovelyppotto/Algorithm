// 프로그래머스 - 카펫

function solution(brown, yellow) {
  for (let h = 1; h <= yellow; h++) {
    if (yellow % h === 0) {
      let w = yellow / h;

      if (2 * (w + h) + 4 === brown) {
        return [w + 2, h + 2]
      }
    }
  }
}