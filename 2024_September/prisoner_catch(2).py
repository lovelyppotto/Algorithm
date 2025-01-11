import sys
from collections import deque

sys.stdin = open('../2024_August/sample_input.txt', 'r')
def check_dir(num):
    if num == 1:
        direction = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    elif num == 2:
        direction = [(1, 0), (-1, 0)]
    elif num == 3:
        direction = [(0, 1), (0, -1)]
    elif num == 4:
        direction = [(-1, 0), (0, 1)]
    elif num == 5:
        direction = [(1, 0), (0, 1)]
    elif num == 6:
        direction = [(1, 0), (0, -1)]
    else:
        direction = [(-1, 0), (0, -1)]

    return direction

def bfs(r, c, t):
    visited = [[False for _ in range(M)] for _ in range(N)]
    total_time = t
    cx, cy = r, c
    visited[cx][cy] = True
    q.append((r, c, total_time))


    while q:
        cx, cy, c_time = q.popleft()
        # 검사할 방향 지정
        if c_time == L:
            break
        direction = check_dir(tunnel[cx][cy])
        # for i in range(len(direction)):
        #     nx, ny = cx + direction[i][0], cy + direction[i][1]
        for dx, dy in direction:
            nx, ny = cx + dx, cy + dy
            tmp = c_time
            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and tunnel[nx][ny] != 0 :
                next_pipe = tunnel[nx][ny]
                next_directions = check_dir(next_pipe)
                # 횟수가 남아서 더 갈 수 있을 때 해당 방향의 파이프 체크하는 로직 추가해야 함
                # n_direction = check_dir(tunnel[nx][ny])
                # x_element, y_element = [t[0] for t in n_direction], [t[1] for t in n_direction]
                # if -direction[i][0] in x_element or -direction[i][1] in y_element:
                if (-dx, -dy) in next_directions:
                    visited[nx][ny] = True
                    c_time += 1
                    q.append((nx, ny, c_time))
                    c_time = tmp

    count = 0
    for row in visited:
        for v in row:
            if v == True:
                count += 1

    return count

T = int(input())
for tc in range(1, T + 1):
    # N, M -> 지하 터널 지도 세로/가로
    # R, C -> 맨홀 뚜껑 좌표(x,y)
    # L -> 탈출 후 소요된 시간
    N, M, R, C, L = map(int, input().split())
    tunnel = [list(map(int, input().split())) for _ in range(N)]
    time = 1
    q = deque()


    print(bfs(R, C, time))