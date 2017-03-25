import GameState from './GameState';

export default {
    stringifyGameState: (state) => {
        let outputString = '';

        for (let frame = 0; frame < 9; frame++){
            outputString += `${GameState.getScoreForBall1OnFrame(state, frame)}, ${GameState.getScoreForBall2OnFrame(state, frame)} | `;
        }

        outputString += `${GameState.getScoreForBall1OnFrame(state, 9)}, ${GameState.getScoreForBall2OnFrame(state, 9)}, ${GameState.getScoreForBonusBallOnLastFrame(state, 9)}`;

        return outputString;
    }
};