// 프로그래머스 - 소수 찾기

// 소수 찾는 알고리즘 만들어두고(제곱근이하만확인?)
// dfs로 최대숫자 이하만큼 배열만들기...?(7자리면너무크지않나)

function solution(numbers) {
  const numArr = numbers.split('');
  let result = 0;
  // 확인한 수 제거용
  const set = new Set();

  const visited = new Array(numbers.length).fill(false);

  function dfs(currentStr) {
    // 현 시점에서 체크할 요소 모두 체크
    // currentStr이 비어있지 않다면
    if (currentStr.length > 0) {
      // 정수로 변환(앞에 0 붙는경우 체크)
      const num = parseInt(currentStr);
      // set에 없으면 
      if (!set.has(num)) {
        set.add(num);
        // 소수판별
        if (isPrimeNum(num)) {
          result += 1;
        }
      }
    }

    for (let i = 0; i < numArr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(currentStr+numArr[i])
        visited[i] = false;
      }
    }
  }
  dfs('');
  return result;
  }

// 소수 판별
function isPrimeNum(num) {
    if (num < 2) return false;
    
    for (let i = 2; i * i <= num; i++) { // 2부터 시작
        if (num % i === 0) return false;
    }
    return true;
}

console.log(solution("17"));
console.log(solution("2"));
console.log(solution("011"));