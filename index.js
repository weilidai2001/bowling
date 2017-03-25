import readline from 'readline-sync';
import GameState from './src/GameState';
import GameLogic from './src/GameLogic';
import OutputUtil from './src/OutputUtil';

const outputDevice = {
    print: console.log
};

const inputDevice = {
    promptEnterScore: () => parseInt(readline.question('Please enter score for current bowl: '))
};

function start() {
    let gameState = GameState.getInitialState();

    continuePlayingUntilGameEnd(gameState);
}

function continuePlayingUntilGameEnd(gameState) {
    if (!GameLogic.isGameEnded(gameState)) {
        continuePlayingUntilGameEnd(bowl(gameState));
    }
}

function bowl(state) {
    const score = inputDevice.promptEnterScore();
    const newState = GameLogic.calculateNewState(state, score);
    outputDevice.print(OutputUtil.stringifyBowlScores(newState));
    return newState;
}

start();