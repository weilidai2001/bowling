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
    }
};