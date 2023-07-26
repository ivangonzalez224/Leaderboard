import { scoresList } from './elements.js';

export default async function getScores() {
    let scoresData = [];
    const response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I9M1akJB1fujplf54ULE/scores/");
    const userScoresList = await response.json();
    console.log(userScoresList);
    scoresData = userScoresList.result;
    return (scoresData);
}