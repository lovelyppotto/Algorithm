// 프로그래머스 - 푸드 파이트 대회

/**
 * 
 */

// function solution(food) {
//   let list = '';
//   for (let i = 1; i <= food.length; i++){
//     const count = Math.floor(food[i]/2);
//     list += i.toString().repeat(count);
//   }
//   list += '0';
//   for (let i = food.length - 1; i >= 1; i--){
//     const count = Math.floor(food[i]/2);
//     list += i.toString().repeat(count);
//   }
//   return list;
// }

solution([1, 3, 4, 6]);

// 반복문 줄인 버전전
function solution(food) {
  let list = '';
  for (let i = 1; i <= food.length; i++){
    const count = Math.floor(food[i]/2);
    list += i.toString().repeat(count);
  }
  // 0을 붙인뒤엔 
  return list + '0' + list.split('').reverse().join('');
}