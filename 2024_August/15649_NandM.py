N, M = map(int, input().split())

#  방문체크 리스트(1부터 시작하므로 쿠션 0을 끼워넣어준다)
visited = [False] * (N + 1)


def permutation(result):
    # 기저조건(결과값 길이가 M이 되면 출력시킨다)
    if len(result) == M:
        print(*result)
        return
    # 1부터 N까지 순회
    for i in range(1, N + 1):
        # 아직 방문하지 않았다면
        if not visited[i]:
            # 방문체크
            visited[i] = True
            # 해당 순서 남겨두고 재귀 시작
            permutation(result + [i])

            # 다음 순열 구하기 위해 방문체크 풀어준다
            visited[i] = False


permutation([])
