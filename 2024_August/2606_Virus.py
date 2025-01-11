def worm(start, n):
    cnt = 0
    # 방문체크할 배열 생성
    visited = [0] * (n + 1)
    stack = []
    # 첫 노드를 방문체크해주고
    visited[start] = 1
    # 시작지점 지정
    v = start
    while True:
        # 노드에 연결된 컴퓨터 순회
        for com in computers[v]:
            # 만약 아직 방문하지 않았다면
            if visited[com] == 0:
                # 막혔을 때 돌아오기 위해 스택에 넣어주기
                stack.append(v)
                # 시작지점 이동
                v = com
                # 감염되었으므로 카운트 증가
                cnt += 1
                # 방문체크
                visited[com] = 1
                break
        else:
            # 만약 다 돌고 빠져나왔을 때 스택이 0이 아니라면
            if len(stack) > 0:
                # 시작점을 돌려놓는다
                v = stack.pop()
            else:
                break
    return cnt


# 컴퓨터의 수
N = int(input())
# 간선의 수
edge = int(input())
# 빈 인접 리스트 생성
computers = [[] for _ in range(N + 1)]

arr = []
# 인접 리스트 생성(연결 정보 전부 넣어준다)
for _ in range(edge):
    a, b = map(int, input().split())
    computers[a].append(b)
    computers[b].append(a)

# 시작 지점과 노드 수 전달
print(worm(1, N))
