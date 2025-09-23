// 프로그래머스 - 베스트앨범

function solution(genres, plays) {
  const albumMap = new Map();

  for (let i=0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if(!albumMap.has(genre)) {
      albumMap.set(genre, {
        totalPlays: 0,
        songs: [],
      });
    }

    albumMap.get(genre).totalPlays += play;

    albumMap.get(genre).songs.push({
      index: i,
      plays: play,
    });
  }

  const sortedGenres = Array.from(albumMap.entries())
    .sort((a, b) => b[1].totalPlays - a[1].totalPlays);

  const result = [];

  for (const [genre, info] of sortedGenres) {
    info.songs.sort((a, b) => {
      if (b.plays === a.plays) {
        return a.index - b.index;
      }
      return b.plays - a.plays
    });
    
    // Math.min(x, y): x와 y중 최소값을 찾아 할당함
    // 장르에 노래가 몇 곡이 있든(2곡보다 적어도) 선택할 수 있도록
    const songsToAdd = Math.min(2, info.songs.length);
    for (let i = 0; i < songsToAdd; i++) {
      result.push(info.songs[i].index);
    }
  }
  return result;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])