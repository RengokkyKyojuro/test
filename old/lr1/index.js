const t1 = document.getElementById("task1");
const t2 = document.getElementById("task2");
const t3 = document.getElementById("task3");
const t4 = document.getElementById("task4");
const t5 = document.getElementById("task5");
const t6 = document.getElementById("task6");

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function task1() {
    const a = 17;
    const b = 10;
    const c = a - b;
    const d = 7;

    const result = c + d;

    t1.textContent = result
    alert(result)
}

function task2() {
    const name = "Іван";
    const finish = `Привіт, ${name}!`

    t2.textContent = finish
    alert(finish)
}

function task3() {
    const arr = ['a', 'b', 'c'];

    t3.textContent = arr + `\nПерший елемент: ${arr[0]}, Третій елемент: ${arr[2]}`
    alert(arr)
    alert(`Перший елемент: ${arr[0]}, Третій елемент: ${arr[2]}`)
}

function task4() {
    const month = Math.trunc(getRandom(1, 12));

    let season;

    if (month === 12 || month === 1 || month === 2) {
        season = 'Зима';
    } else if (month >= 3 && month <= 5) {
        season = 'Весна';
    } else if (month >= 6 && month <= 8) {
        season = 'Літо';
    } else if (month >= 9 && month <= 11) {
        season = 'Осінь';
    } else {
        season = 'Невірний номер місяця';
    }

    const finish = `Місяць ${month} належить до пори року: ${season}`

    t4.textContent = finish
}

function task5() {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    const finish = `Сума чисел від 1 до 100 дорівнює: ${sum}`

    t5.textContent = finish
}

function task6() {
    function subtractAndEnsurePositive(a, b) {
        const c = Math.abs(a - b);
        return c;
    }

    t6.textContent = `Результат для a = 3, b = 5: ${subtractAndEnsurePositive(3, 5)}` + `\nРезультат для a = 6, b = 1: ${subtractAndEnsurePositive(6, 1)}`
}

task1()
task2()
task3()
task4()
task5()
task6()