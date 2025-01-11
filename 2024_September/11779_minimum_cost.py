from heapq import heappush, heappop

def dijkstra(start):
    heap = []
    heappush(heap, (0, start, 1, [start]))
    dist = [float('inf') for _ in range(N + 1)]
    dist[start] = 0

    while heap:
        cost, node, cnt, path = heappop(heap)
        if node == E:
            return dist[node], cnt, path
        if cost > dist[node]:
            continue

        for next_node, next_weight in cities[node]:
            if dist[next_node] > cost + next_weight:
                dist[next_node] = cost + next_weight
                n_path = path + [next_node]
                heappush(heap, (dist[next_node], next_node, cnt + 1, n_path))

N = int(input())
M = int(input())

cities = [[] for _ in range(N+1)]
for _ in range(M):
    u, v, w = map(int, input().split())
    cities[u].append([v, w])


S, E = map(int, input().split())
min_cost, city, result_path = dijkstra(S)
print(min_cost)
print(city)
print(*result_path)