function getScore({ goal, guess, turn, MaxTurnLength }) {
    const { currentTurnLength, offset } = getTurnValues({ turn, MaxTurnLength });

    let score = 0;
    for (let i = offset; i <= offset + currentTurnLength; i++) {
        if (goal[i] === guess[i]) score += 1000;
        else if (goal.includes(guess[i])) score += 250;

        if (goal === guess) score += 3000;

        return score;
    }
}

function getTurnValues({ turn, MaxTurnLength }) {
    switch (turn) {
        case 1: return { currentTurnLength: MaxTurnLength - 4, offset: 0 };
        case 2: return { currentTurnLength: MaxTurnLength - 3, offset: 0 };
        case 3: return { currentTurnLength: MaxTurnLength - 4, offset: 2 };
        case 4: return { currentTurnLength: MaxTurnLength - 4, offset: 3 };
        case 5: return { currentTurnLength: MaxTurnLength - 4, offset: 4 };
        case 6: return { currentTurnLength: MaxTurnLength - 3, offset: 3 };
        case 7: return { currentTurnLength: MaxTurnLength - 3, offset: 2 };
        case 8: return { currentTurnLength: MaxTurnLength - 2, offset: 0 };
        case 9: return { currentTurnLength: MaxTurnLength - 1, offset: 0 };
        case 10: return { currentTurnLength: MaxTurnLength - 1, offset: 2 };
        case 11: return { currentTurnLength: MaxTurnLength, offset: 0 };
        default: throw new Error('Invalid turn');
    }
}
function getOffset(turn) {
    switch (turn) {
        case 0: return '';
        case 1: return '';
        case 2: return '○';
        case 3: return '○○';
        case 4: return '○○○';
        case 5: return '○○';
        case 6: return '○';
        case 7: return '';
        case 8: return '';
        case 9: return '○';
        case 10: return '';
        default: throw new Error('Invalid turn');
    }
}

export { getScore, getTurnValues, getOffset };