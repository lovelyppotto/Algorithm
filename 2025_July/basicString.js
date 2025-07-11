// 프로그래머스 - 문자열 다루기 기본

function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false; // 길이가 4도 6도 아니면 false
    } else if(isNaN(Number(s))) {
        return false; // 문자가 포함되어 있으면 false
    } else return true;
}