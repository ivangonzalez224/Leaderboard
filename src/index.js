import _ from 'lodash';
import './style.css';
import { titleContainer, title, scoresList } from './modules/elements.js';

const scoresData = [{ name: 'Name1', score: 100 }, { name: 'Name2', score: 20 }, { name: 'Name3', score: 50 }, { name: 'Name4', score: 78 }];
// Lodash, now imported by this script
title.innerHTML = _.join(['Leaderboard', ' '], ' ');
titleContainer.appendChild(title);

scoresData.forEach((element) => {
  const scoreCard = document.createElement('div');
  const name = document.createElement('span');
  const score = document.createElement('span');
  scoresList.appendChild(scoreCard);
  if (scoresData.indexOf(element) % 2 !== 0) {
    scoreCard.id = 'card_gray';
  }
  scoreCard.className = 'score_card';
  name.innerText = `${element.name}:`;
  score.innerText = element.score;
  scoreCard.appendChild(name);
  scoreCard.appendChild(score);
});
