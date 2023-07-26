import { nameField, scoreInput } from './elements.js';
//import submitScore from './submit.js';

const addScore = () => {
    let newScore = { "user": nameField.value, "score": scoreInput.value};
    console.log(newScore);
};
export default addScore;
