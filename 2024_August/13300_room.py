# N = 학생 수 / k = 방의 최대 인원수
N, K = map(int, input().split())
students = {}
# 방의 수 카운트
cnt = 0

# 해당 과정 모두 거친 후 모든 학생이 학년 및 성별로 나뉘어 딕셔너리에 들어감
for i in range(N):
    S, Y = input().split()
    student = Y + S     # 학년+성별로 딕셔너리 들어가게 된다
    if student not in students:
        students.setdefault(student, 1)
    else:
        students[student] += 1

# 정리된 values를 순회하며 방 수 구하기
for num in students.values():
    quotient = num // K
    remainder = num % K
    # 나머지가 있다는 건 방이 하나 더 필요하다는 뜻
    if remainder != 0:
        cnt += quotient + 1
    else:
        cnt += quotient

print(cnt)