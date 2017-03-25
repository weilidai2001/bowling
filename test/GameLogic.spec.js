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
            const stateBeforeBowl = {
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

            GameLogic.determinePointerToNextFrameAndBall(stateBeforeBowl).should.be.deepEqual(expected);
        });

        it('should return frame 1 and isBall1 true when frame 0 ball 1 was a strike', function () {
            const stateBeforeBowl = {
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

            GameLogic.determinePointerToNextFrameAndBall(stateBeforeBowl).should.be.deepEqual(expected);
        });

        it('should return frame 2 and isBall1 true when frame 1 ball 1 was a strike', function () {
            const stateBeforeBowl = {
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

            GameLogic.determinePointerToNextFrameAndBall(stateBeforeBowl).should.be.deepEqual(expected);
        });

        it('should return frame 3 and isBall1 true when frame 1 ball 1 was a strike', function () {
            const stateBeforeBowl = {
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
                        ball1: 2,
                        ball2: 3,
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
                frame: 3,
                isBall1: true,
                isBall2: false,
                isBonus: false
            };

            GameLogic.determinePointerToNextFrameAndBall(stateBeforeBowl).should.be.deepEqual(expected);
        });

        it('should return frame 9 and isBonusBall true when frame 9 ball 2 was a spare', function () {
            const stateBeforeBowl = {
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

            GameLogic.determinePointerToNextFrameAndBall(stateBeforeBowl).should.be.deepEqual(expected);
        });

        it('should return frame 9 and isBall2 true when frame 9 ball 1 was a strike and ball 2 has not yet been played', function () {
            const stateBeforeBowl = {
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
                        ball1: 10,
                        ball2: '?',
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            const expected = {
                frame: 9,
                isBall1: false,
                isBall2: true,
                isBonus: false
            };

            GameLogic.determinePointerToNextFrameAndBall(stateBeforeBowl).should.be.deepEqual(expected);
        });

        it('should return frame 9 and isBonusBall true when frame 9 ball 1 was a strike and ball 2 has played', function () {
            const stateBeforeBowl = {
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
                        ball1: 10,
                        ball2: 2,
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

            GameLogic.determinePointerToNextFrameAndBall(stateBeforeBowl).should.be.deepEqual(expected);
        });
    });

    describe('calculateNewState', function () {
        it('should add bowl result to frame 0 and ball1 when game is in initial state', function () {
            const initialState = GameState.getInitialState();
            const currentBowl = 5;
            const expectedState = {
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
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.calculateNewState(initialState, currentBowl).should.be.deepEqual(expectedState);
        });

        it('should add bowl result to frame 0 and ball2 when first ball is not a strike', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 1,
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
            const currentBowl = 5;
            const expectedState = {
                frames: [
                    {
                        ball1: 1,
                        ball2: 5,
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

            GameLogic.calculateNewState(initialState, currentBowl).should.be.deepEqual(expectedState);
        });

        it('should add bowl result to frame 1 and ball1 when frame 0 ball 1 was a strike', function () {
            const initialState = {
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
            const currentBowl = 5;
            const expectedState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
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
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.calculateNewState(initialState, currentBowl).should.be.deepEqual(expectedState);
        });

        it('should add bowl result to frame 9 and bonusBall when frame 9 ball 2 was a spare', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
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
            const currentBowl = 5;
            const expectedState = {
                frames: [
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 8,
                        bonusBall: 5,
                        score: '?'
                    }
                ]
            };

            GameLogic.calculateNewState(initialState, currentBowl).should.be.deepEqual(expectedState);
        });

    });

    describe('recalculateFrameScores', function () {
        it('should calculate frame scores when game is in initial state', function () {
            const initialState = GameState.getInitialState();
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
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when there was no spare nor strike in the previous frame', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 5,
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
            const expectedState = {
                frames: [
                    {
                        ball1: 5,
                        ball2: 2,
                        score: 7
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

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when previous frame is spare', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 5,
                        ball2: 5,
                        score: '?'
                    },
                    {
                        ball1: 1,
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
            const expectedState = {
                frames: [
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 11
                    },
                    {
                        ball1: 1,
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

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when previous frame is strike', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 1,
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
            const expectedState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 13
                    },
                    {
                        ball1: 1,
                        ball2: 2,
                        score: 3
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

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when two frames are strikes in a row', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 3,
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
            const expectedState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 23
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 3,
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

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when penultimate frame is spare', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 8,
                        score: '?'
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 8,
                        score: 20
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when penultimate frame is strike', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 15
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        bonusBall: '?',
                        score: 5
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when penultimate frame is strike and final frame ball 1 is also strike', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when penultimate frame is strike and final frame ball 1 is also strike and ball 2 played', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 10,
                        ball2: 5,
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 25
                    },
                    {
                        ball1: 10,
                        ball2: 5,
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when final frame is spare', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        bonusBall: 3,
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 20
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        bonusBall: 3,
                        score: 13
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when final frame is strike', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: '?'
                    },
                    {
                        ball1: 10,
                        ball2: 5,
                        bonusBall: 3,
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 2,
                        ball2: 3,
                        score: 5
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 25
                    },
                    {
                        ball1: 10,
                        ball2: 5,
                        bonusBall: 3,
                        score: 18
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when X|X|X|X|X|X|X|X|X|X||XX', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        bonusBall: 10,
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        bonusBall: 10,
                        score: 30
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when 9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        bonusBall: '?',
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        bonusBall: '?',
                        score: 9
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

        it('should calculate frame scores when 5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        bonusBall: 5,
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        bonusBall: 5,
                        score: 15
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });


        it('should calculate frame scores when X|7/|9-|X|-8|8/|-6|X|X|X||81', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 20
                    },
                    {
                        ball1: 7,
                        ball2: 3,
                        score: 19
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 18
                    },
                    {
                        ball1: 0,
                        ball2: 8,
                        score: 8
                    },
                    {
                        ball1: 8,
                        ball2: 2,
                        score: 10
                    },
                    {
                        ball1: 0,
                        ball2: 6,
                        score: 6
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 28
                    },
                    {
                        ball1: 10,
                        ball2: 8,
                        bonusBall: 1,
                        score: '?'
                    }
                ]
            };
            const expectedState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 20
                    },
                    {
                        ball1: 7,
                        ball2: 3,
                        score: 19
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 18
                    },
                    {
                        ball1: 0,
                        ball2: 8,
                        score: 8
                    },
                    {
                        ball1: 8,
                        ball2: 2,
                        score: 10
                    },
                    {
                        ball1: 0,
                        ball2: 6,
                        score: 6
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 28
                    },
                    {
                        ball1: 10,
                        ball2: 8,
                        bonusBall: 1,
                        score: 19
                    }
                ]
            };

            GameLogic.recalculateFrameScores(initialState).should.be.deepEqual(expectedState);
        });

    });

    describe('calculateTotalScore', function () {
        it('should calculate total score when game is in initial state', function () {
            const initialState = GameState.getInitialState();
            const expectedTotal = 0;

            GameLogic.calculateTotalScore(initialState).should.be.deepEqual(expectedTotal);
        });

        it('should calculate the total score of 300 when X|X|X|X|X|X|X|X|X|X||XX', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: 10,
                        bonusBall: 10,
                        score: 30
                    }
                ]
            };
            const expectedTotal = 300;

            GameLogic.calculateTotalScore(initialState).should.be.deepEqual(expectedTotal);
        });

        it('should calculate the total score of 90 when 9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        bonusBall: '?',
                        score: 9
                    }
                ]
            };
            const expectedTotal = 90;

            GameLogic.calculateTotalScore(initialState).should.be.deepEqual(expectedTotal);
        });

        it('should calculate the total score of 150 when 5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        score: 15
                    },
                    {
                        ball1: 5,
                        ball2: 5,
                        bonusBall: 5,
                        score: 15
                    }
                ]
            };
            const expectedTotal = 150;

            GameLogic.calculateTotalScore(initialState).should.be.deepEqual(expectedTotal);
        });


        it('should calculate the total score of 167 when X|7/|9-|X|-8|8/|-6|X|X|X||81', function () {
            const initialState = {
                frames: [
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 20
                    },
                    {
                        ball1: 7,
                        ball2: 3,
                        score: 19
                    },
                    {
                        ball1: 9,
                        ball2: 0,
                        score: 9
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 18
                    },
                    {
                        ball1: 0,
                        ball2: 8,
                        score: 8
                    },
                    {
                        ball1: 8,
                        ball2: 2,
                        score: 10
                    },
                    {
                        ball1: 0,
                        ball2: 6,
                        score: 6
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 30
                    },
                    {
                        ball1: 10,
                        ball2: '?',
                        score: 28
                    },
                    {
                        ball1: 10,
                        ball2: 8,
                        bonusBall: 1,
                        score: 19
                    }
                ]
            };
            const expectedTotal = 167;

            GameLogic.calculateTotalScore(initialState).should.be.deepEqual(expectedTotal);
        });

    });
});