from collections import deque# 너비우선탐색을 통해 배추흰지렁이가 이동하도록 만든다
import sys

# 상 우 하 좌
direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]

def bfs(x, y):
    q = deque([(x, y)])

    while q:
        cx, cy = q.popleft()
        field[cx][cy] = 0

        for dx, dy in direction:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < N and 0 <= ny < M and field[nx][ny] == 1:
                q.appendleft((nx, ny))



T = int(input())
for _ in range(T):
    # 가로 M / 세로 N / K = 배추 위치
    M, N, K = map(int, input().split())
    field = [[0 for _ in range(M)] for _ in range(N)]

    for _ in range(K):
        X, Y = map(int, sys.stdin.readline().split())
        field[Y][X] = 1

    # 너비우선탐색을 하면서 델타탐색
    # for문으로 위치가 1일때만 멈춰서 탐색하도록 만들기
    cnt = 0

    for i in range(N):
        for j in range(M):
            if field[i][j] == 1:
                cnt += 1
                bfs(i, j)

    print(cnt)