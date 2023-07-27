import { scoresList } from './elements.js';

const updateCards = (scoresData) => {
  scoresData.forEach((element) => {
    const scoreCard = document.createElement('div');
    const name = document.createElement('span');
    const score = document.createElement('span');
    scoresList.appendChild(scoreCard);
    if (scoresData.indexOf(element) % 2 !== 0) {
      scoreCard.id = 'card_gray';
    }
    scoreCard.className = 'score_card';
    name.innerText = `${element.user}:`;
    score.innerText = element.score;
    scoreCard.appendChild(name);
    scoreCard.appendChild(score);
  });
};

export default updateCards;
