'''
프로그래머스) 공원 산책
'''

def solution(park, routes):
    arr = [list(row) for row in park]
    # 시작지점 탐색
    start = (0, 0)
    row_len = len(arr)
    col_len = len(arr[0])
    for i in range(row_len):
        for j in range(col_len):
            if arr[i][j] == 'S':
                start = (i, j)
                break
        if start != (0, 0):
            break

    # 기본 루트 배열(우, 하, 좌, 상)
    route = {'E': (0, 1), 'S': (1, 0), 'W': (0, -1), 'N': (-1, 0)}

    # 현재 위치
    current = start

    # 로봇 강아지의 경로별 이동 확인
    for rout in routes:
        direct, step = rout.split()
        step = int(step)
        dx, dy = route[direct]

        # 현 위치
        cx, cy = current

        # 이동 가능하다면
        move = True
        for _ in range(step):
            nx, ny = cx + dx, cy + dy
            # 만약 범위를 벗어나거나 / 다음 위치가 장애물이라면
            if not ( 0 <= nx < row_len and 0 <= ny < col_len ) or arr[nx][ny] == 'X':
                move = False
                # 그대로 종료(이 경우 현 위치에서 움직이지 않는다)
                break
            # 다음 위치로 이동하기 위해 변수 재할당
            cx, cy = nx, ny
        # 이동한다
        if move:
            current = cx, cy

    return current


park = ["OSO","OOO","OXO","OOO"]
routes = ["E 2", "S 3", "W 1"]
print(solution(park, routes))