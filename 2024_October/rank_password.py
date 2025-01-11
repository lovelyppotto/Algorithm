def decryptPassword(encrypted):
    numbers = []
    result = []
    i = 0

    # Step 1: Collect leading numbers
    while i < len(encrypted) and encrypted[i].isdigit():
        numbers.append(encrypted[i])
        i += 1

    # Step 2: Process the rest of the string
    while i < len(encrypted):
        if i < len(encrypted) - 1 and encrypted[i].islower() and encrypted[i + 1].isupper():
            result.append(encrypted[i + 1])  # 대문자 추가
            result.append(encrypted[i])      # 소문자 추가
            result.append('*')                # 별표 추가
            i += 2                            # 두 문자 처리 후 이동
        elif encrypted[i] == '0' and numbers:
            result.append(numbers.pop())      # 앞의 숫자를 가져와서 추가
            i += 1                            # 한 칸 이동
        else:
            result.append(encrypted[i])      # 그대로 추가
            i += 1                            # 한 칸 이동

    # Step 3: Append any remaining numbers at the end
    result.extend(reversed(numbers))

    # Step 4: Make the first character lowercase and second character uppercase
    if len(result) > 0:
        result[0] = result[0].lower()  # 첫 문자 소문자
    if len(result) > 1:
        result[1] = result[1].upper()  # 두 문자 대문자

    return ''.join(result)

# 테스트
encrypted_pw = input("암호화된 비밀번호를 입력하세요: ")
print("복호화된 비밀번호:", decryptPassword(encrypted_pw))
