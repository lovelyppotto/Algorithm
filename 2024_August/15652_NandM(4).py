def permutation(result, a):
    if len(result) == M:
        print(*result)
        return

    for i in range(a, N+1):
        permutation(result + [i], i)

N, M = map(int, input().split())
permutation([], 1)