import sys
from collections import deque

sys.stdin = open('../2024_August/sample_input.txt', 'r')


def check_dir(num):
    if num == 1:
        return [(0, 1), (1, 0), (0, -1), (-1, 0)]
    elif num == 2:
        return [(1, 0), (-1, 0)]
    elif num == 3:
        return [(0, 1), (0, -1)]
    elif num == 4:
        return [(-1, 0), (0, 1)]
    elif num == 5:
        return [(1, 0), (0, 1)]
    elif num == 6:
        return [(1, 0), (0, -1)]
    # elif num == 7:
    #     direction = [(-1, 0), (0, -1)]
    else:
        return [(-1, 0), (0, -1)]



def bfs(r, c):
    q = deque()
    visited = [[False for _ in range(M)] for _ in range(N)]
    q.append((r, c, 1))
    visited[r][c] = True
    cnt = 1

    while q:
        cx, cy, time = q.popleft()
        # 검사할 방향 지정
        if time == L:
            continue

        # for i in range(len(direction)):
        #     nx, ny = cx + direction[i][0], cy + direction[i][1]
        for dx, dy in check_dir(tunnel[cx][cy]):
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and tunnel[nx][ny] != 0:
                # 횟수가 남아서 더 갈 수 있을 때 해당 방향의 파이프 체크하는 로직 추가해야 함
                # n_direction = check_dir(tunnel[nx][ny])
                # x_element, y_element = [t[0] for t in n_direction], [t[1] for t in n_direction]
                # if -direction[i][0] in x_element or -direction[i][1] in y_element:
                if (-dx, -dy) in check_dir(tunnel[nx][ny]):
                    visited[nx][ny] = True
                    cnt += 1
                    q.append((nx, ny, time + 1))

    return cnt



T = int(input())
for tc in range(1, T + 1):
    # N, M -> 지하 터널 지도 세로/가로
    # R, C -> 맨홀 뚜껑 좌표(x,y)
    # L -> 탈출 후 소요된 시간
    N, M, R, C, L = map(int, input().split())
    tunnel = [list(map(int, input().split())) for _ in range(N)]
    result = bfs(R, C)

    print(f'#{tc} {result}')