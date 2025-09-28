// 프로그래머스 - 체육복

function solution(n, lost, reserve) {
    // 체육복을 가진 학생들을 표시하는 배열 (1: 체육복 있음, 0: 없음)
    const uniforms = new Array(n + 1).fill(1);
    
    // 도난당한 학생들 체육복 제거
    for (const student of lost) {
        uniforms[student] = 0;
    }
    
    // 여벌 체육복 추가 (자기 것이 도난당했으면 자기가 입고, 아니면 빌려줄 수 있음)
    for (const student of reserve) {
        uniforms[student]++;
    }
    
    // 체육복 빌려주기
    for (let i = 1; i <= n; i++) {
        // 현재 학생이 체육복이 없다면
        if (uniforms[i] === 0) {
            // 앞번호 학생이 여벌이 있는지 확인
            if (i > 1 && uniforms[i - 1] > 1) {
                uniforms[i - 1]--;
                uniforms[i]++;
            }
            // 뒷번호 학생이 여벌이 있는지 확인
            else if (i < n && uniforms[i + 1] > 1) {
                uniforms[i + 1]--;
                uniforms[i]++;
            }
        }
    }
    
    // 체육복을 가진 학생 수 계산
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (uniforms[i] > 0) {
            count++;
        }
    }
    
    return count;
}