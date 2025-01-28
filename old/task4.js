function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count += (i * i === n) ? 1 : 2; // Если делитель i равен sqrt(n), то добавляем только 1
        }
    }
    return count;
}

function countCompositeWithPrimeDivisors(l, r) {
    let result = 0;

    for (let i = l; i <= r; i++) {
        if (i > 1) { // Пропускаем 1, так как оно не составное
            const divisorsCount = countDivisors(i);
            if (divisorsCount > 2 && isPrime(divisorsCount)) {
                result++;
            }
        }
    }

    return result;
}

// Пример использования
const l = [1, 3, 6]; // Начало отрезка
const r = [9, 6, 9]; // Конец отрезка
for (let i = 0; i <= 2; i++) {
    console.log(countCompositeWithPrimeDivisors(l[i], r[i])); // Вывод количества составных чисел с простым количеством делителей
}

