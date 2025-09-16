// 프로그래머스 - 프로세스

function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({priority, index}));
  let cnt = 0;

  while (queue.length) {
    let current = queue.shift();

    // some(요소 => 조건): 배열 요소를 검사하여 조건을 만족하는 요소가 하나라도 있다면 true 반환
    // 만약 현 요소보다 높은 우선순위가 있다면
    if (queue.some(process => process.priority > current.priority)) {
      // 다시 집어넣음
      queue.push(current);
      // 가장 높은 우선순위라면 카운트 올리고 처리
    } else {
      cnt++;
      // 만약 알고 싶은 프로세스의 위치라면 카운트 반환 
      if (current.index === location) return cnt;
    }
  }
}

solution([2, 1, 3, 2], 2);