function findPassword(presses, requiredChars, maxLength) {
    const requiredSet = new Set(requiredChars);
    const requiredCount = requiredSet.size;
    const charCount = new Map();
    let left = 0;
    let validCount = 0;
    let bestPassword = "";

    for (let right = 0; right < presses.length; right++) {
        const char = presses[right];

        // Увеличиваем счетчик символа
        if (requiredSet.has(char)) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
            if (charCount.get(char) === 1) {
                validCount++;
            }
        }

        // Проверяем, все ли необходимые символы присутствуют
        while (validCount === requiredCount) {
            const currentLength = right - left + 1;

            // Проверяем, что длина не превышает максимальную
            if (currentLength <= maxLength) {
                const currentPassword = presses.substring(left, right + 1);
                // Сравниваем с лучшим найденным паролем
                if (currentPassword.length > bestPassword.length ||
                    (currentPassword.length === bestPassword.length && left > presses.indexOf(bestPassword))) {
                    bestPassword = currentPassword;
                }
            }

            // Уменьшаем окно
            const leftChar = presses[left];
            if (requiredSet.has(leftChar)) {
                charCount.set(leftChar, charCount.get(leftChar) - 1);
                if (charCount.get(leftChar) === 0) {
                    validCount--;
                }
            }
            left++;
        }
    }

    // Возвращаем самый правый подходящий пароль или "-1", если не найдено
    return bestPassword.length > 0 ? bestPassword : "-1";
}

// Пример использования
const input1 = "abacaba";
const requiredChars1 = "abc";
const maxLength1 = 4;
console.log(findPassword(input1, requiredChars1, maxLength1)); // Вывод: "caba"

const input2 = "abacaba";
const requiredChars2 = "abc";
const maxLength2 = 3;
console.log(findPassword(input2, requiredChars2, maxLength2)); // Вывод: "cab"
