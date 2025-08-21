// 프로그래머스 - 치킨 쿠폰

function solution(chicken) {
  let service = 0;
  while (chicken >= 10) {
    // 10마리당 서비스 치킨 1마리
    service += Math.floor(chicken / 10);
    // 서비스 치킨을 받은 후 남은 치킨 수
    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }
  return service;
}