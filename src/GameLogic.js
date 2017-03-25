import GameState from './GameState';

export default {
    isGameEnded(state) {
        const isLastFrameSpare = state =>
            GameState.getScoreForBall1OnFrame(state, 9) + GameState.getScoreForBall2OnFrame(state, 9) === 10;

        const isLastFrameStrike = state =>
            GameState.getScoreForBall1OnFrame(state, 9) === 10;

        const isLastFrameInitiallyNoStrikeNorSpareThenTwoBallsPlayed = state =>
            (GameState.getScoreForBall1OnFrame(state, 9) !== '?' || GameState.getScoreForBall2OnFrame(state, 9) !== '?') &&
            !isLastFrameStrike(state) &&
            !isLastFrameSpare(state);

        const isLastFrameInitiallySpareThenBonusPlayed = state =>
             isLastFrameSpare(state) && GameState.getScoreForBonusBallOnLastFrame(state) !== '?';

        const isLastFrameInitiallyStrikeThenBonus2Played = state =>
            isLastFrameStrike(state) && GameState.getScoreForBonusBallOnLastFrame(state) !== '?';

        return isLastFrameInitiallyNoStrikeNorSpareThenTwoBallsPlayed(state) ||
            isLastFrameInitiallySpareThenBonusPlayed(state) ||
            isLastFrameInitiallyStrikeThenBonus2Played(state);
    },
    determinePointerToNextFrameAndBall(state) {
        return {
            frame: 0,
            isBall1: true,
            isBall2: false,
            isBonus: false
        };
    }
};

