import {getLetterMatchCount} from './';

describe('getLetterMatchCount',()=>{
    const secretWord='party';
    test('returns correct count when they are no matching letters',()=>{
        const letterMatchCount=getLetterMatchCount('bones',secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test('returns correct count under three matching letters',()=>{
        const letterMatchCount=getLetterMatchCount('train',secretWord);
        expect(letterMatchCount).toBe(3);
    });
    test('retuns correct count when they are duplicate letters in the guessedword',()=>{
        const letterMatchCount=getLetterMatchCount('parka',secretWord);
        expect(letterMatchCount).toBe(3);
    });
})