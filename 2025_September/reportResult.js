// 프로그래머스 - 신고 결과 받기

function solution(id_list, report, k) {
  const users = new Map();

  for (let name of id_list) {
    users.set(name, {
      mail: 0,
      reportedCount: 0,
      reporters: [],
    });
  }
  
  // 신고 절차
  for (let i=0; i<report.length; i++) {
    const info = report[i].split(' ');
    const reporterName = info[0];
    const reported = info[1];

    if (!users.get(reported).reporters.includes(reporterName)){
      users.get(reported).reporters.push(reporterName);
      users.get(reported).reportedCount += 1;
    }
  } 

  // 처리결과 메일 보내기
  for (let [name, data] of users.entries()) {
    if (data.reporters.length >= k) {
      for (let i=0; i < data.reporters.length; i++) {
        users.get(data.reporters[i]).mail += 1;
      }
    }
  }

  console.log(users);
  
  // map() 함수가 특정값만 뽑아 배열로 변환함
  return Array.from(users.values()).map(data => data.mail);
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)