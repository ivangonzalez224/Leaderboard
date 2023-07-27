const getScores = async (id) => {
  let scoresData = [];
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const response = await fetch(requestURL);
  const userScoresList = await response.json();
  scoresData = userScoresList.result;
  return (scoresData);
};

export default getScores;