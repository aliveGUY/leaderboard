async function createGame() {
  const game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name: 'My cool new game' }),
  });
  return game.json().then((data) => localStorage.setItem('Data', /\w{20}/.exec(data.result)[0]));
}

async function post(gameId, data) {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

async function get(gameId) {
  const score = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
  return score.json().then((data) => data.result);
}

export { createGame, post, get };