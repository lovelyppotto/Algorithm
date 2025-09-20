function solution(n, arr1, arr2) {
  const result = [];
  
  for (let i = 0; i < n; i++) {
    // 각 숫자를 이진수로 변환하고 OR 연산 수행
    const combined = arr1[i] | arr2[i];
    
    // 이진수를 n자리 문자열로 변환 (앞에 0 패딩)
    const binaryStr = combined.toString(2).padStart(n, '0');
    
    // 1은 벽('#'), 0은 공백(' ')으로 변환
    const mapRow = binaryStr.replace(/1/g, '#').replace(/0/g, ' ');
    
    result.push(mapRow);
  }
    
    return result;
}