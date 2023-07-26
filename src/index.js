import _ from 'lodash';
import './style.css';
import { titleContainer, title, scoresList, submitBtn, refreshBtn } from './modules/elements.js';
//import postGame from './modules/refresh.js';
import getScores from './modules/getScores.js';
//import submitScore from './modules/submit.js';
import addScore from './modules/addScore.js';
import updateCards from './modules/updateCards.js';


let scoresData = [ ];
let getData;
title.innerHTML = _.join(['Leaderboard', ' '], ' ');
titleContainer.appendChild(title);

// scoresData.forEach((element) => {
//   const scoreCard = document.createElement('div');
//   const name = document.createElement('span');
//   const score = document.createElement('span');
//   scoresList.appendChild(scoreCard);
//   if (scoresData.indexOf(element) % 2 !== 0) {
//     scoreCard.id = 'card_gray';
//   }
//   scoreCard.className = 'score_card';
//   name.innerText = `${element.name}:`;
//   score.innerText = element.score;
//   scoreCard.appendChild(name);
//   scoreCard.appendChild(score);
// });



// postGame("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games", {"name":"Quiz tech"}).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

// submitScore("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I9M1akJB1fujplf54ULE/scores/", {"user":"player 2", "score": 45}).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });

getData = getScores();
getData.then(value => {
  scoresData = value;
  console.log(scoresData);
  if (scoresData.length !== 0) {
    while (scoresList.lastElementChild) {
      scoresList.removeChild(scoresList.lastElementChild);
    }
    updateCards(scoresData);
  }
})

submitBtn.addEventListener('click', () => {
  updateCards();
});

refreshBtn.addEventListener('click', () => {
  getScores();
});
