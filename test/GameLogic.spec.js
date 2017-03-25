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
                        bonusBall: '?',
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
                        bonusBall: '?',
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
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.isGameEnded(gameComplete).should.be.false();
        });

        it('should return true when final frame has two balls played and there was a spare and the bonus ball is played also', function () {
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
                        bonusBall: 2,
                        score: '?'
                    }
                ]
            };

            GameLogic.isGameEnded(gameComplete).should.be.true();
        });

        it('should return false when final frame has two balls played and there was a strike', function () {
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
                        ball1: 10,
                        ball2: 1,
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.isGameEnded(gameComplete).should.be.false();
        });

        it('should return true when final frame has two balls played and there was a strike and the bonus ball is played also', function () {
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
                        ball1: 10,
                        ball2: 1,
                        bonusBall: 10,
                        score: '?'
                    }
                ]
            };

            GameLogic.isGameEnded(gameComplete).should.be.true();
        });
    });

    describe('determinePointerToNextFrameAndBall', function () {
        it('should return frame 0 and isBall1 true when game is in initial state', function () {
            const initialState = GameState.getInitialState();
            const expected = {
                frame: 0,
                isBall1: true,
                isBall2: false,
                isBonus: false
            };

            GameLogic.determinePointerToNextFrameAndBall(initialState).should.be.deepEqual(expected);
        });

        it('should return frame 0 and isBall2 true when first ball is not a strike', function () {
            const stateWhenFirstBowlIsNotStrike = {
                frames: [
                    {
                        ball1: 2,
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
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            const expected = {
                frame: 0,
                isBall1: false,
                isBall2: true,
                isBonus: false
            };

            GameLogic.determinePointerToNextFrameAndBall(stateWhenFirstBowlIsNotStrike).should.be.deepEqual(expected);
        });

        it('should return frame 1 and isBall1 true when frame 0 ball 1 was a strike', function () {
            const stateWhenFirstBowlIsNotStrike = {
                frames: [
                    {
                        ball1: 10,
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
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            const expected = {
                frame: 1,
                isBall1: true,
                isBall2: false,
                isBonus: false
            };

            GameLogic.determinePointerToNextFrameAndBall(stateWhenFirstBowlIsNotStrike).should.be.deepEqual(expected);
        });

        it('should return frame 2 and isBall1 true when frame 1 ball 1 was a strike', function () {
            const stateWhenFirstBowlIsNotStrike = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 10,
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
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            const expected = {
                frame: 2,
                isBall1: true,
                isBall2: false,
                isBonus: false
            };

            GameLogic.determinePointerToNextFrameAndBall(stateWhenFirstBowlIsNotStrike).should.be.deepEqual(expected);
        });

        it('should return frame 9 and isBonusBall true when frame 9 ball 2 was a spare', function () {
            const stateWhenFirstBowlIsNotStrike = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 8,
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            const expected = {
                frame: 9,
                isBall1: false,
                isBall2: false,
                isBonus: true
            };

            GameLogic.determinePointerToNextFrameAndBall(stateWhenFirstBowlIsNotStrike).should.be.deepEqual(expected);
        });

        it('should return frame 9 and isBall2 true when frame 9 ball 1 was a strike and ball 2 has not yet been played');

        it('should return frame 9 and isBonusBall true when frame 9 ball 1 was a strike and ball 2 has played');
    });
});