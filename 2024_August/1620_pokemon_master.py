import sys

# 도감에 수록된 포켓몬 수 N / 문제의 수 M
N, M = map(int, sys.stdin.readline().split())
pokemon_idx = {}
pokemon_names = {}
for i in range(1, N+1):
    pokemon = input()
    pokemon_idx[i] = pokemon
    pokemon_names[pokemon] = i

for _ in range(M):
    quiz = input()
    if quiz.isdecimal():
        print(pokemon_idx[int(quiz)])
    else:
        print(pokemon_names[quiz])


