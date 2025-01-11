def count_recolor(row, col, color):
    # 색 칠하는 최종 횟수 저장하는 변수
    count = 0
    # 받아온 현재 색상 저장
    current_color = color
    # 8 * 8 배열 만들며 순회
    for k in range(8):
        for l in range(8):
            # 기존 배열에 수 증가시키며 비교한다
            # 만약 현재 색상과 다르면 카운트 1
            if board[row + k][col + l] != current_color:
                count += 1
            # 만약 현재 색상이 블랙이었다면
            if current_color == 'B':
                # 다음 비교를 위해 화이트로 바꾼다
                current_color = 'W'
            # 현재 색상이 화이트였다면
            else:
                # 다음 비교를 위해 블랙으로 바꾼다
                current_color = 'B'
        # 다음 행으로 넘어가면 순서가 반대가 되므로 색상을 바꿔준다!
        if current_color == 'W':
            current_color = 'B'
        else:
            current_color = 'W'

    return count


N, M = map(int, input().split())
board = [list(input()) for _ in range(N)]
mn = float('inf')

# 8*8만큼의 보드 만들기 위해 탐색영역 제한
for i in range(0, N - 7):
    for j in range(0, M - 7):
        # (0,0) 자리의 색상 지정하여 각각 함수 호출
        # (i, j -> 0, 0)
        cd = count_recolor(i, j, 'W')
        cd2 = count_recolor(i, j, 'B')
        # 모든 결과값 중 최소값 찾아 저장해둔다
        mn = min(mn, cd, cd2)


print(mn)
