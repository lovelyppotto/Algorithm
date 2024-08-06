checker = [list(input()) for i in range(8)]
cnt = 0

for i in range(8):
    for j in range(8):
        # 짝수 행의 짝수 열의 요소가 f라면
        if i % 2 == 0 and j % 2 == 0 and checker[i][j] == 'F':
            cnt += 1
        # 홀수 행의 홀수 요소가 f라면
        elif i % 2 != 0 and j % 2 != 0 and checker[i][j] == 'F':
            cnt += 1

print(cnt)