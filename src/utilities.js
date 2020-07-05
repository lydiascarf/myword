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

export { getOffset } ;
