// 프로그래머스 - 로그인 성공?

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id) {
      if (db[i][1] === pw) {
        return 'login';
      } else {
        return 'wrong pw';
      }
    }
  }
  return 'fail';
}