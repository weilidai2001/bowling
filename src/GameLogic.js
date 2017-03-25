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
    calculateNewState() {

    },
    determinePointerToNextFrameAndBall(state) {
        const isFirstBallUnpopulatedOnFrame = (state, frame) => GameState.getScoreForBall1OnFrame(state, frame) === '?';
        const isFirstBallStrikeOnFrame = (state, frame) => GameState.getScoreForBall1OnFrame(state, frame) === 10;
        const isSecondBallUnpopulatedOnFrame = (state, frame) => GameState.getScoreForBall2OnFrame(state, frame) === '?';
        const isPreviousFrameAStrike = (state, frame) => frame !== 0 && GameState.getScoreForBall1OnFrame(state, frame - 1) === 10;
        const isFinalFrame = frame => frame === 9;
        const isSpare = (state, frame) => GameState.getScoreForBall1OnFrame(state, frame) + GameState.getScoreForBall2OnFrame(state, frame) === 10;

        for (let frame = 0; frame < 10; frame++){
            if (isFirstBallUnpopulatedOnFrame(state, frame)) {
                return {
                    frame: frame,
                    isBall1: true,
                    isBall2: false,
                    isBonus: false
                };
            } else if (isFinalFrame(frame) && isSpare(state, frame)) {
                return {
                    frame: frame,
                    isBall1: false,
                    isBall2: false,
                    isBonus: true
                };
            } else if (isFinalFrame(frame) && isFirstBallStrikeOnFrame(state, frame) && isSecondBallUnpopulatedOnFrame(state, frame)) {
                return {
                    frame: frame,
                    isBall1: false,
                    isBall2: true,
                    isBonus: false
                };
            } else if (isFinalFrame(frame) && isFirstBallStrikeOnFrame(state, frame) && !isSecondBallUnpopulatedOnFrame(state, frame)) {
                return {
                    frame: frame,
                    isBall1: false,
                    isBall2: false,
                    isBonus: true
                };
            } else if (isSecondBallUnpopulatedOnFrame(state, frame) && !isFirstBallStrikeOnFrame(state, frame)) {
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

