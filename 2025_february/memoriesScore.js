/** 
    1. 이름 - 점수 매칭시키기
    2. photo 내부 배열 반복하면서 점수 계산
**/

function solution(name, yearning, photo) {

    const names = {}; // 이름 - 점수 담을 객체
    let scores = [];
    for (let i = 0; i < name.length; i++) {
        names[name[i]] = yearning[i]
    }
    
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        for (const people of photo[i]) {
            if (people in names) {
                score += names[people];
            }
        }
        scores.push(score)
    }
    return scores;
}

// console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]))
// console.log(solution(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]], [67, 0, 55]))