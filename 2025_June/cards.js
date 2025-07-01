// 프로그래머스 - 카드 뭉치

function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift(); // 첫번째 요소 제거
    }
    else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      return "No";
    }
  } 
  return "Yes";
}