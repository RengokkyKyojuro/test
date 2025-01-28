function capitalizeFirstLetterOfEachWord(sentence) {
    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Приклад використання
const inputSentence = "Перетворіть першу букву кожного слова рядка в верхній РЕГІСТР.\n";
const result = capitalizeFirstLetterOfEachWord(inputSentence);
console.log(result);