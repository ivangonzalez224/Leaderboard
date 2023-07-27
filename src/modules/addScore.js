import { scoresList } from './elements.js';

import { nameField, scoreInput } from './elements.js';
//import submitScore from './submit.js';

const addScore = () => {
    const scoreCard = document.createElement('div');
    const name = document.createElement('span');
    const score = document.createElement('span');
    scoresList.appendChild(scoreCard);
    scoreCard.className = 'score_card';
    name.innerText = nameField.value;
    score.innerText = scoreInput.value;
    scoreCard.appendChild(name);
    scoreCard.appendChild(score);
};
export default addScore;
