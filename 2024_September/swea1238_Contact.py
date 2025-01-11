last = []

def dfs(node, time):
    if not relation[node]:
        if not last:
            last.append((node, time))
        else:
            if last[0][1] == time:
                last.append((node, time))
        return
    visited[node] = True
    for p in relation[node]:
        if not visited[p]:
            visited[p] = True
            dfs(p, time+1)


for tc in range(1, 2):
    N, S = map(int, input().split())
    arr = list(map(int, input().split()))
    relation = [[] for _ in range(101)]
    visited = [False] * 101

    for i in range(0, N, 2):
        a = arr[i]
        b = arr[i + 1]
        if b not in relation[a]:
            relation[a].append(b)


    dfs(S, 0)
    print(last)
    # print(f'#{tc} {max(last)}')