def y_tel(arr):
    bill = 0
    for sec in arr:
        if sec > 30:
            if sec % 30 >= 0:
                bill += (10 * (sec // 30) + 10)
            else:
                bill += (10 * (sec // 30))
        else:
            bill += 10
    return bill


def m_tel(arr):
    bill = 0
    for sec in arr:
        if sec < 60:
            bill += 15
        else:
            if sec % 60 >= 0:
                bill += (15 * (sec // 60) + 15)
            else:
                bill += (15 * (sec // 60))
    return bill


n = int(input())
call_lst = list(map(int, input().split()))

Y_bill = y_tel(call_lst)
M_bill = m_tel(call_lst)

if Y_bill > M_bill:
    print(f'M {M_bill}')
elif Y_bill < M_bill:
    print(f'Y {Y_bill}')
else:
    print(f'Y M {Y_bill}')
