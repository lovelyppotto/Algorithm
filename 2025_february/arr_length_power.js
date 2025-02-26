function solution(arr) {
    let answer = [...arr];
    let cnt;
    const powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
    for (let i=0; i<powers.length; i++) {
        if (arr.length <= powers[i]) {
            cnt = powers[i] - arr.length;
            // answer = Array(powers[i]).concat(arr)
            for (let j=0; j<cnt; j++) {
                answer.push(0);
            }
            break;
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6]))
console.log(solution([58, 172, 746, 89]))