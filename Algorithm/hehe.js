let words = ["abc", "ab", "bc", "b"]
function sumPrefixScores(words) {
    const n = words.length;
    const trie = { _count: 0 };
    const result = [];
    for (let i = 0; i < n; i++) {
        const word = words[i];

        let node = trie;
        for (let j = 0; j < word.length; j++) {
            if (!node[word[j]]) node[word[j]] = {};
            node = node[word[j]];
            node._count = (node._count || 0) + 1;
        }
    }
    for (let i = 0; i < n; i++) {
        const word = words[i];
        let count = 0;

        let node = trie;
        for (let j = 0; j < word.length; j++) {
            node = node[word[j]];
            count += (node._count || 0);
        }

        result[i] = count;
    }
    return result;
}
console.log(sumPrefixScores(words));