import _ from 'lodash';
import './style.css';
import {
  titleContainer, title, scoresList, submitBtn, refreshBtn, nameField, scoreInput,
} from './modules/elements.js';
import postGame from './modules/createGame.js';
import getScores from './modules/getScores.js';
import submitScore from './modules/submit.js';
import addScore from './modules/addScore.js';
import updateCards from './modules/updateCards.js';

let idGame = 'I9M1akJB1fujplf54ULE';
let scoresData = [];
let getData;
title.innerHTML = _.join(['Leaderboard', ' '], ' ');
titleContainer.appendChild(title);

getData = getScores(idGame);
getData.then((value) => {
  scoresData = value;
  if (scoresData.length !== 0) {
    while (scoresList.lastElementChild) {
      scoresList.removeChild(scoresList.lastElementChild);
    }
    scoresData.sort((s1, s2) => s2.score - s1.score);
    updateCards(scoresData);
  } else {
    postGame('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', { name: 'Quiz dev' }).then((data) => {
      [, , , idGame] = data.result.split(' ');
    });
  }
});
// update the score list
refreshBtn.addEventListener('click', () => {
  getData = getScores(idGame);
  getData.then((value) => {
    scoresData = value;
    if (scoresData.length !== 0) {
      while (scoresList.lastElementChild) {
        scoresList.removeChild(scoresList.lastElementChild);
      }
      scoresData.sort((s1, s2) => s2.score - s1.score);
      updateCards(scoresData);
    }
  });
});
// Create a new score
submitBtn.addEventListener('click', () => {
  const userScoreInput = +scoreInput.value;
  if (nameField.value.length > 0 && scoreInput.value.length > 0 && userScoreInput) {
    const postURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${idGame}/scores`;
    submitScore(postURL, { user: nameField.value, score: scoreInput.value });
    addScore(nameField.value, scoreInput.value);
  }
});
