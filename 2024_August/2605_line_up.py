n = int(input())

draw_lst = list(map(int, input().split()))
stu_lst = [i for i in range(1, n+1)]

# 규칙에 따라 줄 세울 리스트 생성
line_up = []

for i in range(len(stu_lst)):
    for j in range(len(draw_lst)):
        # 만약 해당 학생이 뽑은 번호를 발견하면
        if i == j:
            # (줄서있는 학생의 수 - 학생이 뽑은 쪽지의 수) 인덱스에 해당 학생 추가
            line_up.insert(len(line_up) - draw_lst[j], stu_lst[i])
        else:
            continue

print(*line_up)


