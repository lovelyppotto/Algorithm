// 프로그래머스 - 문자열 내림차순으로 배치하기
function solution(s) {
    let arr = s.split('')
    return arr.sort((a, b) => b - a).join('');
}