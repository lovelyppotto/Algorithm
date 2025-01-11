def decimal(x):
    for j in range(2, x):
        if x % i == 0:
            return False
    return True

N, M = map(int, input().split())

for i in range(N, M+1):
    if decimal(i):
        print(i)

