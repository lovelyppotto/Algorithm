// 1. pos가 op_start <= pos <= op_end 일시 바로 op_end로 이동
// 2. 명령어에 따라 prev 일시 10초 전 next일시 10초 후로 이동
// 2-1. 만약 커맨드 실행 후 op 구간일 경우 op_end로 이동한다
// 2-2. 이후 초가 60초가 넘어가면 분에 1을 더하고 초는 60의 나머지로 설정
// 2-3. 초가 0초 미만이면 분에 1 빼고 초는 그 차이만큼 60에서 빼기
// 3. 커맨드 실행 결과가 video_len을 넘어가면 결과는 video_len이 된다
// 4. 커맨드 실행 결과과 10초 미만일 경우 처음 위치로 이동
// 5. 커맨드 실행 결과 남은 시간이 10초 미만일 땐 마지막 위치로 이동

function solution(video_len, pos, op_start, op_end, commands) {
    const [r_min, r_sec] = video_len.split(':').map(Number); // 비디오 길이
    const [s_min, s_sec] = op_start.split(':').map(Number); // op_start 분 초
    const [e_min, e_sec] = op_end.split(':').map(Number); // op_end 분 초
    let [c_min, c_sec] = pos.split(':').map(Number); // 현재 분 초
    
    // 비디오 길이(초 단위)
    const videoLengthSeconds = r_min * 60 + r_sec;

    // 초기 위치가 op 구간인지 확인
    [c_min, c_sec] = check(s_min, s_sec, e_min, e_sec, c_min, c_sec);
    
    for (const cmd of commands) {
        if (cmd === 'next') {
            // 현재 위치 초 단위로 변환
            const currentSeconds = c_min * 60 + c_sec;
            // 남은 시간 계산
            const remainingSeconds = videoLengthSeconds - currentSeconds;
            
            if (remainingSeconds < 10) {
                // 남은 시간이 10초 미만이면 영상 끝으로 이동
                c_min = r_min;
                c_sec = r_sec;
            } else {
                // 10초 후로 이동
                c_sec += 10;
                if (c_sec >= 60) {
                    c_min += 1;
                    c_sec %= 60;
                }
                
                // 비디오 길이 초과 체크
                const newSeconds = c_min * 60 + c_sec;
                if (newSeconds > videoLengthSeconds) {
                    c_min = r_min;
                    c_sec = r_sec;
                }
            }
        } else if (cmd === 'prev') {
            // 현재 위치 초 단위로 변환
            const currentSeconds = c_min * 60 + c_sec;
            
            if (currentSeconds < 10) {
                // 현재 위치가 10초 미만이면 처음으로 이동
                c_min = 0;
                c_sec = 0;
            } else {
                // 10초 전으로 이동
                const newSeconds = currentSeconds - 10;
                c_min = Math.floor(newSeconds / 60);
                c_sec = newSeconds % 60;
            }
        }
        
        // op 구간 확인
        [c_min, c_sec] = check(s_min, s_sec, e_min, e_sec, c_min, c_sec);
    }

    return formatTime(c_min, c_sec);
}

function check(s_min, s_sec, e_min, e_sec, c_min, c_sec) {
    // 현재 시간, 시작 시간, 끝 시간을 초 단위로 변환
    const currentSec = c_min * 60 + c_sec;
    const startSec = s_min * 60 + s_sec;
    const endSec = e_min * 60 + e_sec;
    
    // op 구간에 있는지 확인 
    if (currentSec >= startSec && currentSec <= endSec) {
        return [e_min, e_sec]; // op 구간에 있으면 op_end로 이동
    }
    
    return [c_min, c_sec]; // 그렇지 않으면 현재 위치 유지
}

function formatTime(min, sec) {
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]))
console.log(solution("30:01", "29:55", "01:00", "01:30", ["next"]))
console.log(solution("10:00", "10:00", "01:00", "02:00", ["next", "prev"]))