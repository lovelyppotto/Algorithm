def sugar_delivery(N):
    dp = [float('inf')] * (N + 1)

    # 기본값 저장
    dp[0] = 0
    if N >= 3:
        dp[3] = 1
    if N >= 5:
        dp[5] = 1

    # 값이 저장되지 않은 6부터 검증
    for i in range(6, N + 1):
        # 각 봉지의 최소개수를 구해 필요한 설탕봉지만 하나 더하게 만든다
        dp[i] = min(dp[i - 3], dp[i - 5]) + 1

    if dp[N] != float('inf'):
        return dp[N]
    else:
        return -1

N = int(input())
print(sugar_delivery(N))