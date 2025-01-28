const readline = require('readline');

// Функция для парсинга времени
function parseTime(timeStr) {
    const [hh, mm, ss] = timeStr.split(':').map(Number);
    return hh * 3600 + mm * 60 + ss; // Возвращаем время в секундах
}

// Функция для вычисления результатов
function calculateResults(startTime, attempts) {
    const results = {};
    attempts.forEach(attempt => {
        const [teamName, timeStr, serverId, result] = attempt;
        const timeInSeconds = parseTime(timeStr);
        const minutesPassed = Math.floor((timeInSeconds - startTime) / 60);

        if (!results[teamName]) {
            results[teamName] = {successfulAttempts: 0, penaltyTime: 0, failedAttempts: {}};
        }

        const teamResult = results[teamName];

        if (result === 'ACCESSED') {
            teamResult.successfulAttempts += 1;
            teamResult.penaltyTime += minutesPassed;
            if (teamResult.failedAttempts[serverId]) {
                teamResult.penaltyTime += teamResult.failedAttempts[serverId] * 20;
                delete teamResult.failedAttempts[serverId]; // Удаляем неудачные попытки после успешного взлома
            }
        } else if (result === 'DENIED' || result === 'FORBIDEN') {
            if (!teamResult.failedAttempts[serverId]) {
                teamResult.failedAttempts[serverId] = 0;
            }
            teamResult.failedAttempts[serverId] += 1;
        }
    });
    return results;
}

function printResults(results) {
    const sortedResults = Object.entries(results).sort((a, b) => {
        const [teamA, dataA] = a;
        const [teamB, dataB] = b;
        if (dataA.successfulAttempts !== dataB.successfulAttempts) {
            return dataB.successfulAttempts - dataA.successfulAttempts; // Сортируем по количеству успешных попыток
        }
        return dataA.penaltyTime - dataB.penaltyTime; // Сортируем по штрафному времени
    });

    sortedResults.forEach(([teamId, data]) => {
        console.log(`"${teamId}" ${data.successfulAttempts} ${data.penaltyTime}`);
    });
}

// Чтение входных данных
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const attempts = [];
let startTime;
let numberOfRequests = 0;
let currentRequestCount = 0;

console.log("Введите время начала хакатона (hh:mm:ss):");
rl.on('line', (input) => {
    if (!startTime) {
        startTime = parseTime(input);
        console.log("Введите количество запросов:");
        numberOfRequests = parseInt(input);
    }
    if (numberOfRequests > 0) {
        for (let i = 0; i <= numberOfRequests; i++) {
            console.log("Введите запросы (формат: \"Команда\" hh:mm:ss A ACCESSED|DENIED|FORBIDEN|PONG):");
            const parts = input.split(' ');
            console.log(parts)
            if (parts.length < 4) {
                console.log("Ошибка: неверный формат запроса. Пожалуйста, введите в формате: \"Команда\" hh:mm:ss A ACCESSED|DENIED|FORBIDEN|PONG");
                return; // Прерываем выполнение, если формат неверный
            }
            const teamName = parts[0].replace(/"/g, ''); // Убираем кавычки
            const timeStr = parts[1];
            const serverId = parts[2];
            const result = parts[3];

            attempts.push([teamName, timeStr, serverId, result]);
            currentRequestCount++;

            // Проверяем, сколько запросов уже введено
            if (currentRequestCount === numberOfRequests) {
                rl.close();
            }
        }
    }
});

rl.on('close', () => {
    const results = calculateResults(startTime, attempts);
    printResults(results);
});
