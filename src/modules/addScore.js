import { scoresList } from './elements.js';

const addScore = (userName, userScore) => {
  const scoreCard = document.createElement('div');
  const name = document.createElement('span');
  const score = document.createElement('span');
  scoresList.appendChild(scoreCard);
  scoreCard.className = 'score_card';
  if (scoresList.children.length % 2 === 0) {
    scoreCard.id = 'card_gray';
  }
  name.innerText = `${userName}:`;
  score.innerText = userScore;
  scoreCard.appendChild(name);
  scoreCard.appendChild(score);
};
export default addScore;
