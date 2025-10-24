function solution(A, B) {
  // 길이가 다른 경우
  if (A.length !== B.length) {
    return -1;
  }
  // A와 B가 같으면
  if (A === B) {
    return 0;
  }

  for (let i = 1; i < A.length; i++) {
    A = A[A.length - 1] + A.slice(0, A.length - 1);
    if (A === B) {
      return i;
    }
  }
  return -1;
}
