import GameState from './GameState';

export default {
    stringifyBowlScores: (state) => {
        let outputString = '';

        for (let frame = 0; frame < 9; frame++){
            outputString += `${GameState.getScoreForBall1OnFrame(state, frame)}, ${GameState.getScoreForBall2OnFrame(state, frame)} | `;
        }

        outputString += `${GameState.getScoreForBall1OnFrame(state, 9)}, ${GameState.getScoreForBall2OnFrame(state, 9)}, ${GameState.getScoreForBonusBallOnLastFrame(state, 9)}`;

        return outputString;
    },

    stringifyFrameScores: (state) => {
        let outputString = '';

        for (let frame = 0; frame < 9; frame++){
            outputString += `   ${GameState.getFrameScore(state, frame)} | `;
        }

        outputString += `   ${GameState.getFrameScore(state, 9)}`;

        return outputString;
    }
};