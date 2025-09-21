function solution(babbling) {
  const validSounds = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    // 연속된 같은 발음이 있는지 체크
    let hasConsecutive = false;
    for (let sound of validSounds) {
      if (word.includes(sound + sound)) {
        hasConsecutive = true;
        break;
      }
    }
    
    // 연속된 같은 발음이 있다면
    if (hasConsecutive) {
      continue;
    }
    
    // 유효한 발음들로만 구성되어 있는지 체크
    let tempWord = word;
    
    // 각 유효한 발음을 빈 문자열로 대체
    for (let sound of validSounds) {
      tempWord = tempWord.replaceAll(sound, "");
    }
    
    // 모든 유효한 발음을 제거했을 때 빈 문자열이면 발음 가능
    if (tempWord === "") {
      count++;
    }
  }
  
  return count;
}
