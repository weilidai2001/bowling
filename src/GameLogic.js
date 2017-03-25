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
    calculateNewState(state, score) {
        const pointerToNext = this.determinePointerToNextFrameAndBall(state);

        if (pointerToNext.isBall1) {
            return GameState.addScoreForBall1(state, pointerToNext.frame, score)
        } else if (pointerToNext.isBall2) {
            return GameState.addScoreForBall2(state, pointerToNext.frame, score)
        } else if (pointerToNext.isBonus) {
            return GameState.addScoreForBonusBall(state, score)
        }
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
            } else if (isPreviousFrameAStrike(state, frame) && isFirstBallUnpopulatedOnFrame(state, frame)) {
                return {
                    frame: frame,
                    isBall1: true,
                    isBall2: false,
                    isBonus: false
                };
            }
        }
    },
    recalculateFrameScores(state){
        const ignoreUnknown = value => value === '?' ? 0 : value;
        const isSpare = (state, frame) => GameState.getScoreForBall1OnFrame(state, frame) + GameState.getScoreForBall2OnFrame(state, frame) === 10;
        const isFirstBallStrikeOnFrame = (state, frame) => GameState.getScoreForBall1OnFrame(state, frame) === 10;
        const isNextFrameAStrike = (state, frame) => GameState.getScoreForBall1OnFrame(state, frame + 1) === 10;
        const isFirstBallUnpopulatedOnFrame = (state, frame) => GameState.getScoreForBall1OnFrame(state, frame) === '?';
        const isSecondBallUnpopulatedOnFrame = (state, frame) => GameState.getScoreForBall2OnFrame(state, frame) === '?';
        const isBonusBallUnpopulatedOnFrame = (state) => GameState.getScoreForBonusBallOnLastFrame(state) === '?';
        const isFinalFrame = frame => frame === 9;

        let newState = Object.assign({}, state);

        for (let frame = 0; frame < 10; frame++){
            if (isFirstBallUnpopulatedOnFrame(newState, frame)) {

            } else if (isFinalFrame(frame)) {
                if (isFirstBallStrikeOnFrame(newState, frame) && isBonusBallUnpopulatedOnFrame(newState)) {

                } else if (!isSecondBallUnpopulatedOnFrame(newState, frame)) {
                    const frameScore = ignoreUnknown(GameState.getScoreForBall1OnFrame(newState, frame)) +
                        ignoreUnknown(GameState.getScoreForBall2OnFrame(newState, frame)) +
                        ignoreUnknown(GameState.getScoreForBonusBallOnLastFrame(newState));
                    newState = GameState.addFrameScore(newState, frame, frameScore);
                }
            } else if (isSpare(newState, frame) && !isFirstBallUnpopulatedOnFrame(newState, frame + 1)) {
                const frameScore = 10 + ignoreUnknown(GameState.getScoreForBall1OnFrame(newState, frame + 1));
                newState = GameState.addFrameScore(newState, frame, frameScore);
            } else if (isFirstBallStrikeOnFrame(newState, frame)) {
                if (isNextFrameAStrike(newState, frame)) {
                    if (isFinalFrame(frame + 1)) {
                        if (!isSecondBallUnpopulatedOnFrame(newState, frame + 1)) {
                            const frameScore = 10 + 10 + ignoreUnknown(GameState.getScoreForBall2OnFrame(newState, frame + 1));
                            newState = GameState.addFrameScore(newState, frame, frameScore);
                        }
                    } else {
                        const frameScore = 10 + 10 + ignoreUnknown(GameState.getScoreForBall1OnFrame(newState, frame + 2));
                        newState = GameState.addFrameScore(newState, frame, frameScore);
                    }
                } else if (!isSecondBallUnpopulatedOnFrame(newState, frame + 1)) {
                    const frameScore = 10 + ignoreUnknown(GameState.getScoreForBall1OnFrame(newState, frame + 1)) + ignoreUnknown(GameState.getScoreForBall2OnFrame(newState, frame + 1));
                    newState = GameState.addFrameScore(newState, frame, frameScore);
                }
            } else if (!isSecondBallUnpopulatedOnFrame(newState, frame)) {
                const frameScore = ignoreUnknown(GameState.getScoreForBall1OnFrame(newState, frame)) +
                    ignoreUnknown(GameState.getScoreForBall2OnFrame(newState, frame));
                newState = GameState.addFrameScore(newState, frame, frameScore);
            }
        }

        return newState;
    }
};

