import {range} from 'lodash';

export default {
    getInitialState(){
        return {
            frames: [
                ...range(9).map(item => (
                        {
                            ball1: '?',
                            ball2: '?',
                            score: '?'
                        }
                    )
                ),
                {
                    ball1: '?',
                    ball2: '?',
                    bonusBall1: '?',
                    bonusBall2: '?',
                    score: '?'
                }
            ]
        };
    },
    addScoreForBall1(currentState, frame, score) {
        let newState = Object.assign({}, currentState);
        newState.frames[frame].ball1 = score;
        return newState;
    },
    addScoreForBall2(currentState, frame, score) {
        let newState = Object.assign({}, currentState);
        newState.frames[frame].ball2 = score;
        return newState;
    },
    addScoreForBonusBall1(currentState, score) {
        let newState = Object.assign({}, currentState);
        newState.frames[9].bonusBall1 = score;
        return newState;
    },
    addScoreForBonusBall2(currentState, score) {
        let newState = Object.assign({}, currentState);
        newState.frames[9].bonusBall2 = score;
        return newState;
    }
};