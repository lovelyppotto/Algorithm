
import sys
sys.stdin = open('input.txt', 'r')


cnt = 0
stack = []

def subsequence(result, S, sq):
    global cnt
    if set(result) not in stack and sum(result) == S:
        cnt += 1
        stack.append(set(result))
        return
    else:
        for i in range(N):
            if visited[i] == 0:
                visited[i] = 1
                subsequence(result + [sq[i]], S, sq)
                visited[i] = 0
    return


N, S = map(int, input().split())
sq = list(map(int, sys.stdin.readline().split()))
visited = [0] * N
subsequence([], S, sq)
print(cnt)
