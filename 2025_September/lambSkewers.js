// 프로그래머스 - 양꼬치

function solution(n, k) {
  // 양꼬치 가격
  const lambPrice = n * 12000;
  
  // 음료 가격
  const freeDrinks = Math.floor(n / 10);
  const paidDrinks = Math.max(0, k - freeDrinks);
  const drinkPrice = paidDrinks * 2000;

  // 총 금액
  return lambPrice + drinkPrice;
}