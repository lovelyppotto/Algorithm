n, l = map(int, input().split())

# 검사할 수
temp_l = 1
# 검사가 완료된 수의 목록
numbers = []

# l이 포함된 특정 수는 건너뛰게 되므로 for문을 사용하면 인덱스 범위를 정하기 어려워진다
# → while문 사용하여 numbers의 길이가 n과 같아지면 종료한다
while len(numbers) != n:
    if str(l) not in str(temp_l):
        numbers.append(temp_l)
        temp_l += 1
    else:
        # 수를 1 증가시키지 않을 경우 무한루프
        temp_l += 1
        continue

print(numbers[-1])
