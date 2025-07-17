// 프로그래머스 - x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  // Array.from() 메서드 사용하여 배열 생성(첫 번째 매개변수: 유사 배열 객체, 두 번째 매개변수: 맵핑 함수~선택~)
  // 1부터 n까지의 배열을 생성하며 각 인덱스에 1부터 n까지의 x의 배수를 집어넣는다
    return Array.from({ length: n }, (_, i) => x * (i + 1));
}