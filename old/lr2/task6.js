function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function findAmicableNumbers(limit) {
    const amicablePairs = [];

    for (let i = 1; i <= limit; i++) {
        const sumOfDivisors = sumArray(getDivisors(i));
        const partner = sumArray(getDivisors(sumOfDivisors));

        // Перевіряємо умови дружності
        if (partner === i && sumOfDivisors !== i && !amicablePairs.some(pair => pair.includes(i))) {
            amicablePairs.push([i, sumOfDivisors]);
        }
    }

    return amicablePairs;
}

const amicableNumbers = findAmicableNumbers(10000);
console.log(amicableNumbers);
