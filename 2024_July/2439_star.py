# 오른쪽 정렬된 별 찍기
n = int(input())

for i in range(n):
    for j in range(n - i - 1):
        print(' ', end='')
    for j in range(i + 1):
        print('*', end='')
    # 출력
    print('')
