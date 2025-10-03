function solution(my_string) {
  let sum = 0;
  let currentNum = '';
  
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    
    if (char >= '0' && char <= '9') {
      currentNum += char;
    } else {
      if (currentNum !== '') {
        sum += parseInt(currentNum);
        currentNum = '';
      }
    }
  }
  if (currentNum !== '') {
    sum += parseInt(currentNum);
  }
    
    return sum;
}