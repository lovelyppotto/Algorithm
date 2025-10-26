// 프로그래머스 - 외계어 사전

function solution(spell, dic) {
  const sortedSpell = spell.sort().join('');

  for (let word of dic) {
    const sortedWord = word.split('').sort().join('');
    if (sortedSpell === sortedWord) {
      return 1;
    }
  }
  return 2;
}