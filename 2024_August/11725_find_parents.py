import sys
sys.setrecursionlimit(10**9)


def pre_order(node):
    # 각 노드의 인접 정보를 모두 순회한다
    for child in graph[node]:
        # 해당 노드를 방문하지 않았다면(방문했다면 그대로 소멸)
        if not parents[child]:
            parents[child] = node
            pre_order(child)


N = int(input())
# 인접 리스트 사용 예정, 빈 배열을 노드 수+1 만큼 만들어준다
graph = [[] for _ in range(N + 1)]
parents = [0] * (N + 1)


for _ in range(N-1):
    a, b = map(int, sys.stdin.readline().split())
    # a에 연결된 노드 정보 b를 넣어준다
    graph[a].append(b)
    # b에 연결된 노드 정보 a를 넣어준다
    graph[b].append(a)

pre_order(1)

for i in range(2, N+1):
    print(parents[i])
