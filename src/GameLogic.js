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
        const isFirstBallUnpopulatedOnFrame = (state, frame) => GameState.getScoreForBall1OnFrame(state, 0) === '?';
        const isSecondBallUnpopulatedOnFrame = (state, frame) => GameState.getScoreForBall2OnFrame(state, 0) === '?';
        const isPreviousFrameAStrike = (state, frame) => frame !== 0 && GameState.getScoreForBall1OnFrame(state, frame - 1) === 10;

        for (let frame = 0; frame < 10; frame++){
            if (isFirstBallUnpopulatedOnFrame(state, frame)) {
                return {
                    frame: frame,
                    isBall1: true,
                    isBall2: false,
                    isBonus: false
                };
            } else if (isSecondBallUnpopulatedOnFrame(state, frame) && !isPreviousFrameAStrike(state, frame)) {
                return {
                    frame: frame,
                    isBall1: false,
                    isBall2: true,
                    isBonus: false
                };
            } else if (isPreviousFrameAStrike(state, frame)) {
                return {
                    frame: frame,
                    isBall1: true,
                    isBall2: false,
                    isBonus: false
                };
            }
        }
    }
};

