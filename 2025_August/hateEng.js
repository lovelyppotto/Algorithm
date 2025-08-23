// 프로그래머스 - 영어가 싫어요 

function solution(numbers) {
  // 영어 숫자 단어와 숫자 매핑
  const numberMap = {
    "zero": "0",
    "one": "1", 
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
  };
    
  let result = "";
  let i = 0;
    
  while (i < numbers.length) {
    let found = false;
    
    for (let word in numberMap) {
      if (numbers.substring(i, i + word.length) === word) {
        result += numberMap[word];
        i += word.length;
        found = true;
        break;
      }
    }
  }
    
  return parseInt(result);
}