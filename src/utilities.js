function getScore({ goal, guess, t, N }) {
    const { n, p } = getTurnValues({ t, N });
    // console.log(n, p);

    let score = 0;
    for (let i = p; i <= p + n; i++) {
        // console.log(score);
        if (goal[i] === guess[i]) score += 1000;
        else if (goal.includes(guess[i])) score += 250;

        if (goal === guess) score += 3000;

        return score;
    }
}

function getTurnValues({ t, N }) {
    switch (t) {
        case 1: return { n: N - 4, p: 0 };
        case 2: return { n: N - 3, p: 0 };
        case 3: return { n: N - 3, p: 1 };
        case 4: return { n: N - 3, p: 2 };
        case 5: return { n: N - 3, p: 3 };
        case 6: return { n: N - 2, p: 2 };
        case 7: return { n: N - 2, p: 1 };
        case 8: return { n: N - 2, p: 0 };
        case 9: return { n: N - 1, p: 0 };
        case 10: return { n: N - 1, p: 1 };
        case 11: return { n: N, p: 0 };
        default: throw new Error('Invalid turn');
    }
}
