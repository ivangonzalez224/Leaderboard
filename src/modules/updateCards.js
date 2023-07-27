import { scoresList } from './elements.js';

const updateCards = (scoresData) => {
  scoresData.forEach((element) => {
    const scoreCard = document.createElement('div');
    const name = document.createElement('span');
    const score = document.createElement('span');
    scoresList.appendChild(scoreCard);
    if (scoresData.indexOf(element) === 0) {
      scoreCard.id = 'card_yellow';
    }
    if (scoresData.indexOf(element) === 1) {
      scoreCard.id = 'card_grayLight';
    }
    if (scoresData.indexOf(element) === 2) {
      scoreCard.id = 'card_brown';
    }
    if (scoresData.indexOf(element) % 2 !== 0) {
      scoreCard.className = 'score_card card_gray';
    } else {
      scoreCard.className = 'score_card';
    }

    name.innerText = `${element.user}:`;
    score.innerText = element.score;
    scoreCard.appendChild(name);
    scoreCard.appendChild(score);
  });
};

export default updateCards;
