import sys
sys.stdin = open('input.txt')
from heapq import heappush, heappop

def bfs(x, y):
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    q = []
    heappush(q, [0, x, y, K, 3])
    visited = [[float('inf') for _ in range(N)] for _ in range(N)]

    while q:
        counts, cx, cy, k, direction = heappop(q)
        if field[cx][cy] == 'Y':
            return counts
        for l in range(4):
            move = counts
            kill = k
            nx, ny = cx + dx[l], cy + dy[l]
            if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] > move:
                if abs(l-direction) == 1:
                    move += 1
                elif abs(l-direction) == 2:
                    move += 2
                elif abs(l-direction) == 3:
                    move += 1

                if field[nx][ny] in 'GY':
                    heappush(q, [move + 1, nx, ny, kill, l])
                elif field[nx][ny] in 'TY' and k != 0:
                    heappush(q, [move + 1, nx, ny, kill - 1, l])
                visited[cx][cy] = move

    return -1




T = int(input())
for tc in range(1, T+1):
    # N = 필드 크기 / K = 나무 벨 수 있는 횟수
    N, K = map(int, input().split())
    field = [list(input()) for _ in range(N)]


    result = 0

    for i in range(N):
        for j in range(N):
            if field[i][j] == 'X':
                result += bfs(i, j)

    print(f'#{tc} {result}')

