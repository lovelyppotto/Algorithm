from collections import deque

direction = {
    1: [-1, 0],
    2: [1, 0],
    3: [0, -1],
    4: [0, 1]
}

def move():
    tmp = {}
    cnt = 0
    while q:

        x, y, d, time = q.popleft()
        if time > M:
            break
        nx, ny = x + direction[d][0], y + direction[d][1]
        if 0 <= nx < N and 0 <= ny < N:
            if arr[nx][ny] == -1:
                arr[nx][ny] = arr[x][y] // 2
                arr[x][y] = 0
                if d == 1:
                    d = 2
                elif d == 2:
                    d = 1
                elif d == 3:
                    d = 4
                elif d == 4:
                    d = 3
                q.append((nx, ny, d, time + 1))
                cnt += 1
            elif arr[nx][ny] == 0:
                tmp[(nx, ny)] += (arr[x][y], d, time+1)
                cnt += 1
        mx = 0
        if cnt == len(q):
            for keys in tmp.keys():
                for num, d, time in keys:
                    if mx < num:
                        mx = num







T = int(input())
for tc in range(1, T+1):
    # N = 배양판 가로 세로 넓이 / M = 격리 시간 / K = 미생물 군집 수
    N, M, K = map(int, input().split())
    arr = [[0 for _ in range(N)] for _ in range(N)]
    q = deque()

    for _ in range(K):
        l, w, microbe, dirs = map(int, input().split())
        arr[l][w] = microbe
        # x좌표, y좌표, 방향, 소요시간 튜플에 저장해준다
        q.append((l, w, dirs, 0))


    for i in range(N):
        for j in range(N):
            if i == 0 or j == 0 or i == N-1 or j == N-1:
                arr[i][j] = -1

    move()

