// 프로그래머스 - 전화번호 목록

function solution(phone_book) {
  phone_book.sort();
  // console.log(phone_book)
  for (let i=0; i < phone_book.length - 1; i++) {
    // startsWith: 이 요소로 시작하는지를 판단함
    if (phone_book[i+1].startsWith(phone_book[i]))
      return false
  }
  return true
}

solution(["12","123","1235","567","88"])