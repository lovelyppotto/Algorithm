def heart_check(x, y):
    cnt = 0
    for dx, dy in direction_4:
        nx, ny = x + dx, y + dy
        if 0 <= nx < N and 0 <= ny < N and arr[nx][ny] == '*':
            cnt += 1
        else:
            return False
    if cnt == 4:
        return True


def check_body(x, y):
    def leg_check(lx, ly):
        l_leg, r_leg = 0, 0
        direction = [(1, -1), (1, 1)]

        for dx, dy in direction:
            nx, ny = lx + dx, ly + dy
            while 0 <= nx < N and 0 <= ny < N and arr[nx][ny] == '*':
                if (dx, dy) == direction[0]:
                    l_leg += 1
                    nx, ny = nx + 1, ny
                elif (dx, dy) == direction[1]:
                    r_leg += 1
                    nx, ny = nx + 1, ny
                else:
                    break
        return l_leg, r_leg

    left_arm, right_arm, waist = 0, 0, 0
    # 허리 끝나는 부분
    wx, wy = (0, 0)
    for dx, dy in direction_4:
        nx, ny = x + dx, y + dy
        while 0 <= nx < N and 0 <= ny < N and arr[nx][ny] != '_':
            if (dx, dy) == direction_4[0]:
                right_arm += 1
                nx, ny = nx + dx, ny + dy
            elif (dx, dy) == direction_4[1]:
                waist += 1
                wx, wy = nx, ny
                nx, ny = nx + dx, ny + dy
            elif (dx, dy) == direction_4[2]:
                left_arm += 1
                nx, ny = nx + dx, ny + dy
            else:
                break

    left_leg, right_leg = leg_check(wx, wy)

    return left_arm, right_arm, waist, left_leg, right_leg


N = int(input())
arr = [list(input()) for _ in range(N)]

heart = (0, 0)

direction_4 = [(0, 1), (1, 0), (0, -1), (-1, 0)]

for i in range(N):
    for j in range(N):
        if arr[i][j] == '*':
            if heart_check(i, j):
                print(i + 1, j + 1)
                print(*check_body(i, j))
