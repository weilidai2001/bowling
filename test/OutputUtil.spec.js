import 'should';
import GameState from '../src/GameState';
import OutputUtil from '../src/OutputUtil';

describe('OutputUtil', function () {
    describe('stringifyBowlScores()', function () {
        it('should return initial game state', function () {
            const initialState = GameState.getInitialState();
            const expected = '?, ? | ?, ? | ?, ? | ?, ? | ?, ? | ?, ? | ?, ? | ?, ? | ?, ? | ?, ?, ?';

            (OutputUtil.stringifyBowlScores(initialState)).should.be.deepEqual(expected);
        });
    });
});