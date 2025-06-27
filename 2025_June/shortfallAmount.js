// 프로그래머스 - 부족한 금액 계산하기

/** 
 * param: price: number, money: number, count: number
 * return: number
 * price: 놀이기구 이용료
 * money: 가지고 있는 돈
 * count: 놀이기구 이용 횟수
 * 금액이 부족하지 않을 경우 return 0
 * 놀이기구 이용료는 1회 이용 시마다 count의 배수로 증가
 * **/

function solution(price, money, count) {
  let total = 0;
  while (count > 0) {
    total += price * count;
    count--;
  }

  if (total > money) {
    return total - money
  } else {
    return 0;
  }
}


