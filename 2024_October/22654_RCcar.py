def move_car(move, cmd, x, y):
    cx, cy = x, y
    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    direction = 0
    for ch in range(move):
        if cmd[ch] == 'R':
            direction = (direction + 1) % 4
        elif cmd[ch] == 'L':
            direction = (direction - 1) % 4
        elif cmd[ch] == 'A':
            nx, ny = cx + directions[direction][0], cy + directions[direction][1]
            if 0 <= nx < N and 0 <= ny < N and field[nx][ny] != 'T':
                cx, cy = nx, ny

    if field[cx][cy] == 'Y':
        return 1
    else:
        return 0


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    field = [list(input()) for _ in range(N)]
    cmds = int(input())
    x, y = 0, 0
    for i in range(N):
        for j in range(N):
            if field[i][j] == 'X':
                x, y = i, j

    result = []
    for _ in range(cmds):
        n, c = input().split()
        result.append(move_car(int(n), c, x, y))

    print(f"#{tc} {' '.join(map(str, result))}")


