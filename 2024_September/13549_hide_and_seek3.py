from collections import deque

def bfs(start):
    # (출발점, 소요시간)
    q =  deque([(start, 0)])
    # 방문체크할 배열
    visited = [False] * 100001
    # 시작지점 방문체크
    visited[start] = True

    while q:
        # 현재 위치, 소요시간을 맨 앞에서 꺼내온다
        pos, time = q.popleft()

        # 만약 현재 위치가 동생의 위치와 같다면
        if pos == K:
            # 소요시간 리턴
            return time

        # 순간이동을 우선 검증한다(소요시간 짧은것부터 구해야하기 떄문!)
        # 결과값이 10만을 넘지 않으며 아직 방문하지 않았다면
        if pos * 2 <= 100000 and not visited[pos * 2]:
            # 방문체크
            visited[pos * 2] = True
            # 큐의 가장 앞에 위치와 소요시간(0초)을 넣어준다
            q.appendleft((pos * 2, time))

        # 이후 걷기(위치의 인접요소) 위치 검증
        for next in (pos - 1, pos + 1):
            if 0 <= next <= 10000 and not visited[next]:
                # 순간이동을 먼저 검증해야 하므로 큐의 뒤에 추가
                q.append((next, time + 1))
                # 방문체크
                visited[next] = True

# N = 수빈이의 위치 / K = 동생의 위치
N, K = map(int, input().split())
print(bfs(N))