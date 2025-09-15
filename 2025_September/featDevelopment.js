// 프로그래머스 - 기능개발

// 1. speeds만큼 매일 진행도를 배열마다 올려준다
// 2. 이때, 가장 앞에 위치한 1순위 기능이 100이상이 되면unshift로 배열에서 빼내며 카운트를 해준다.
//    바로 뒤에 진행이 완료된 작업이 있다면 함께 배열에서 삭제해 준다.
// 3. 결과값을 새로운 배열에 넣는 작업을 반복한 후 리턴한다

function solution(progresses, speeds) {
  const result = [];

  while (progresses.length) {
    let cnt = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    // console.log(progresses)
    if (progresses[0] >= 100) {
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        cnt += 1;
      }
      result.push(cnt)
    }
    cnt = 0;
  }
  return result;
}

// 소요일을 먼저 계산하는 방법

function solution2(progresses, speeds) {
  const result = [];

  // 소요일 배열 생성
  const days = progresses.map((progress, i) => 
    Math.ceil((100 - progress) / speeds[i])
  );

  console.log(days);

  let i = 0;
  // i의 값이 매번 다르게 증가하므로 while 사용
  while (i < days.length) {
    let cnt = 1;
    let currentDay = days[i];

    // 만약 다음에 포함시킬 수 있는 작업이 있고 && 최근 처리한 일자보다 현재 처리예정인 작업일자가 적을 때
    while (i + cnt < days.length && days[i + cnt] <= currentDay) {
      cnt ++;
    }
    result.push(cnt);
    i += cnt;
  }
  return result;
}


console.log(solution2([93, 30, 55], [1, 30, 5]));
console.log(solution2([40, 20, 30, 20], [1, 1, 1, 1]));
