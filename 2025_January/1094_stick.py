# 백준 1094) 막대기

sticks = [64]  # 초기 막대기 배열
x = int(input())

# 만약 유효한 모든 막대기 합이 x 가 아닐 경우
while sum(sticks) != x:
    # 가장 짧은 막대기 구하기 위해 정렬
    sticks.sort()
    # 짧은 막대기를 배열에서 빼낸다
    min_stick = sticks.pop(0)
    # 짧은 막대기를 반으로 자른다
    tmp = min_stick // 2

    # 만약 남아있는 막대 길이의 합이 x보다 작다면
    # 잘라놓은 모든 막대기를 다시 배열에 넣는다
    if sum(sticks) < x:
        sticks.append(tmp)
        sticks.append(tmp)

print(len(sticks))