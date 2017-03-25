import 'should';
import GameState from '../src/GameState';
import GameLogic from '../src/GameLogic';

describe('GameLogic', function () {
    describe('isGameEnded()', function () {
        it('should return false when game is in initial state', function () {
            const initialState = GameState.getInitialState();

            GameLogic.isGameEnded(initialState).should.be.false();
        });

        it('should return false when game is in progress', function () {
            const gameInProgressState = {
                frames: [
                    {
                        ball1: 0,
                        ball2: 5,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: '?',
                        ball2: '?',
                        bonusBall1: '?',
                        bonusBall2: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.isGameEnded(gameInProgressState).should.be.false();
        });

        it('should return true when final frame has two balls played and there was no spare nor strike', function () {
            const gameComplete = {
                frames: [
                    {
                        ball1: 0,
                        ball2: 5,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        bonusBall1: '?',
                        bonusBall2: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.isGameEnded(gameComplete).should.be.true();
        });

        it('should return false when final frame has two balls played and there was a spare', function () {
            const gameComplete = {
                frames: [
                    {
                        ball1: 0,
                        ball2: 5,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 3,
                        ball2: 7,
                        bonusBall1: '?',
                        bonusBall2: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.isGameEnded(gameComplete).should.be.false();
        });
    });
});