import 'should';
import GameState from '../src/GameState';

describe('GameState', function () {
    describe('getInitialState()', function () {
        it('should return initial game state', function () {
            const expectedState = {
                frames: [
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

            (GameState.getInitialState()).should.be.deepEqual(expectedState)
        });
    });

    describe('addScoreForBall1()', function () {
        it('should return a new state which has a score of 5 at frame 0 and ball 1', function () {
            const initialState = GameState.getInitialState();
            const expected = {
                frames: [
                    {
                        ball1: 5,
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

            (GameState.addScoreForBall1(initialState, 0, 5)).should.be.deepEqual(expected)
        });
    });
});