N, K = map(int, input().split())

lst = [i for i in range(1, N+1)]

front = 0
result = []

while lst:
    front = (front + K - 1) % len(lst)
    result.append(lst.pop(front))

print('<', end='')
for i, num in enumerate(result):
    if i == len(result) - 1:
        print(f'{num}>', end='')
    else:
        print(f'{num}, ', end='')