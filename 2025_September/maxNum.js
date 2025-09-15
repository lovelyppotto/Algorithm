// 프로그래머스 - 가장 큰 수 

function solution(numbers) {
  // 비교 함수가 문자열 +로 동작하도록 형변환
  let strNums = numbers.map(String);

  strNums.sort((a, b) => {
    if ( a+b > b+a ) return -1;
    if ( a+b < b+a ) return 1;
    return 0;
  });
  // 배열의 수가 모두 0일 경우 고려
  return strNums[0] === '0' ? '0' : strNums.join('');
}

console.log(solution([6, 10, 2]))
console.log(solution([0, 0, 0]))
console.log(solution([1, 10, 100, 1000]))