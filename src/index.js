import _ from 'lodash';
import './style.css';
import { titleContainer, title, scoresList, submitBtn, refreshBtn, nameField, scoreInput } from './modules/elements.js';
import postGame from './modules/createGame.js';
import getScores from './modules/getScores.js';
//import submitScore from './modules/submit.js';
import addScore from './modules/addScore.js';
import updateCards from './modules/updateCards.js';

let idGame = 'I9M1akJB1fujplf54ULE';
let scoresData = [];
let getData;
title.innerHTML = _.join(['Leaderboard', ' '], ' ');
titleContainer.appendChild(title);

// submitScore("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I9M1akJB1fujplf54ULE/scores/", {"user":"player 2", "score": 45}).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });
//getting scores to update cards
getData = getScores(idGame);
getData.then(value => {
  scoresData = value;
  if (scoresData.length !== 0) {
    while (scoresList.lastElementChild) {
      scoresList.removeChild(scoresList.lastElementChild);
    }
    updateCards(scoresData);
  } else {
    postGame("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games", {"name": "Quiz dev"}).then((data) => {
      idGame = data.result.split(' ')[3];
    });
    }
})

submitBtn.addEventListener('click', () => {
  if (nameField.value.length > 0 && scoreInput.value.length > 0 && isNaN(scoreInput.value)) {
    updateCards();
  } 
});

refreshBtn.addEventListener('click', () => {
  addScore();
});
