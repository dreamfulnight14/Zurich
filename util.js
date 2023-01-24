const getHashFromWord = (word) => {
    return word.split('').sort().join('');
}

export const makeAnagramGroupFromArray = (words) => {
    const group = {};

    words.forEach(word => {
        const hash = getHashFromWord(word);
        if (group[hash]) group[hash].push(word);
        else group[hash] = [word];
    });

    return Object.keys(group).map(key => group[key]);
}

export const isAnagram = (word1, word2) => {
    return getHashFromWord(word1) === getHashFromWord(word2);
}