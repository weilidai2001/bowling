import GameState from './GameState';

export default {
    isGameEnded(state) {
        const isLastFrameInitiallyNoStrikeNorSpareThenTwoBallsPlayed = state => (GameState.getScoreForBall1OnFrame(state, 9) !== '?' && GameState.getScoreForBall2OnFrame(state, 9) !== '?')

        return isLastFrameInitiallyNoStrikeNorSpareThenTwoBallsPlayed(state);
    }
};

