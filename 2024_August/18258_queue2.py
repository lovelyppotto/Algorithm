import sys
from collections import deque

N = int(input())
queue = deque()
for i in range(N):
    command = list(sys.stdin.readline().split())
    if len(command) > 1:
        cmd, N = command
        if cmd == 'push':
            queue.append(N)
    else:
        cmd = command[0]
        if cmd == 'front':
            if len(queue) == 0:
                print(-1)
            else:
                print(queue[0])
        elif cmd == 'pop':
            if len(queue) == 0:
                print(-1)
            else:
                print(queue.popleft())
        elif cmd == 'size':
            print(len(queue))
        elif cmd == 'empty':
            if len(queue) == 0:
                print(1)
            else:
                print(0)
        else:
            if len(queue) == 0:
                print(-1)
            else:
                print(queue[-1])

