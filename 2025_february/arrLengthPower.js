function solution(arr) {
    let answer = [...arr]; // 기본 arr 배열 그대로 넣어줌
    let cnt; // 0을 넣어줄 횟수
    // 길이 1000까지 존재하므로 1024까지 늘어날 수 있음
    const powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024] 
    for (let i=0; i<powers.length; i++) {
        if (arr.length <= powers[i]) { // 거듭제곱 수보다 작으면
            cnt = powers[i] - arr.length; // 0 채울 횟수 정해주고
            // answer = Array(powers[i]).concat(arr)
            for (let j=0; j<cnt; j++) {
		            // 그만큼 0 넣어줌
                answer.push(0);
            }
            break; // 반복문 즉시 종료
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6]))
console.log(solution([58, 172, 746, 89]))