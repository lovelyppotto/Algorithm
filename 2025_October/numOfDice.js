// 프로그래머스 - 주사위의 개수

function solution(box, n) {
  const [wid, dep, heit] = box;
  
  const width = Math.floor(wid / n);
  const depth = Math.floor(dep / n);
  const heigh = Math.floor(heit / n);
  
  return width * depth * heigh;
}