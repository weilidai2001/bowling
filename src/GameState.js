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
    }
};