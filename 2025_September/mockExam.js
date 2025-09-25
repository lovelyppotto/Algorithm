// 프로그래머스 - 모의고사
function solution(answers) {
  const result = []

  const giveUpMath_1 = [1, 2, 3, 4, 5]
  const giveUpMath_2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const giveUpMath_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let count = [0, 0, 0]

  for (let i=0; i < answers.length; i++) {
    if (giveUpMath_1[i % giveUpMath_1.length] === answers[i]) count[0] += 1;
    if (giveUpMath_2[i % giveUpMath_2.length] === answers[i]) count[1] += 1;
    if (giveUpMath_3[i % giveUpMath_3.length] === answers[i]) count[2] += 1;
  }

  const max = Math.max(...count);
  
  for (let i=0; i < 3; i++) {
    if (max === count[i]) {
      result.push(i+1)
    }
  }

  return result;
}

console.log(solution([1,2,3,4,5]))