// 프로그래머스 - 마지막 두 원소

function solution(num_list) {
  const last = num_list[num_list.length-1];
  const last2 = num_list[num_list.length-2];
  if(last > last2) num_list.push(last - last2);
  else num_list.push(last * 2); 

  return num_list;
}