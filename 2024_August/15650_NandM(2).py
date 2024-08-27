def permutation(result):
    # 만약 지정한 길이에 도달하면
    if len(result) == M:
        # 가장 앞의 수를 최소값으로 두고
        mx = result[0]
        for i in range(M):
            # 만약 뒤의 수가 mx보다 작으면 출력하지 않고 리턴
            if result[i] < mx:
                return
            # 만약 뒤의 수가 mx보다 크면 다음 위치 비교를 위해 최소값을 계속 변경시킴
            else:
                mx = result[i]
        # 모든 조건 통과하면 출력
        print(*result)
        return

    for i in range(1, N+1):
        if not visited[i]:
            visited[i] = True
            permutation(result + [i])
            visited[i] = False


N, M = map(int, input().split())
visited = [False for _ in range(N+1)]
permutation([])