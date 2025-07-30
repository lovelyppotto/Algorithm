// 프로그래머스 - 2016년

function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // Date 객체 생성 
    // a: 월, b: 일
    // 월은 0부터 시작하므로 a - 1 (예를 들어 a에 5가 입력될 경우 6이 된다)
    const date = new Date(2016, a - 1, b);
    
    return days[date.getDay()];
}