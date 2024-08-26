from collections import deque


def shuffle(deck):
    while True:
        if len(deck) == 1:
            return deck[0]
        deck.popleft()
        deck.append(deck.popleft())


N = int(input())
cards = deque(range(1, N + 1))
print(shuffle(cards))
