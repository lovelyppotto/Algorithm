def permutation(result):
    # 중복 출력 위한 상수
    a = 1
    if len(result) == M:
        print(*result)
        return
    for i in range(1, N + 1):
        if not visited[i]:
            # 만약 i가 a와 같으면
            if i == a:
                # a를 1 증가시키고
                a += 1
                # 재귀호출
                # 방문체크를 따로 하지 않았기때문에 중복된 값 출력 가능해진다!
                permutation(result + [i])
            else:
                visited[i] = True
            visited[i] = False


N, M = map(int, input().split())
visited = [False] * (N + 1)

permutation([])