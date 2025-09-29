// 프로그래머스 - 햄버거 만들기

function solution(ingredient) {
  let burger = [];
  let result = 0;

  for (n of ingredient) {
    burger.push(n);

    if (buger.length >= 4) {
      let last = burger.slice(-4);
      if (last[0] === 1 && last[1] === 2 && last[2] === 3 && last[3] === 1) {
        for (let i = 0; i < 4; i++) {
          burger.pop();
          // console.log(burger);
        }
        result++;
      }
    }
  }
  return result;
}


console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));