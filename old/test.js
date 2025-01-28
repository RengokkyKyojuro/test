function processSnowData(n, data) {
    const snowAmount = new Array(n).fill(0); // Массив для хранения количества снега
    let previousSnow = 0; // Количество снега на предыдущий день
    let previousValue = 0

    for (let i = 0; i < n; i++) {
        const value = data[i];
        if (value === -1) {
            snowAmount[i] = previousValue+1;
            previousSnow += previousSnow;
        } else if (value >= previousSnow + 1 && value <= 10**9) {
            snowAmount[i] = value - previousSnow;
            previousSnow = value;
        } else {
            // Если значение некорректно, выводим "NO"
            console.log("NO");
            return;
        }
        previousValue = snowAmount[i]
    }

    // Если все значения корректны, выводим "YES" и массив
    console.log("YES");
    console.log(snowAmount.join(' '));
}

// Пример использования
const n = 3; // Количество дней
const data = [10, -1, 4]; // Пример данных

processSnowData(n, data); // Вывод: "NO" или "YES" и массив
