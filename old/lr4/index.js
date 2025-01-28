function openForm() {
    window.open("form.html", "Форма", "width=400,height=450,left=300,top=120,toolbar=no,menubar=no,location=no,status=yes,scrollbars=yes");
}

function validateForm() {
    const name = document.forms["infoForm"]["name"].value;
    const year = document.forms["infoForm"]["year"].value;
    const gender = document.forms["infoForm"]["gender"].value;
    const citizenship = document.forms["infoForm"]["citizenship"].value;

    if (name === "" || year === "" || gender === "" || citizenship === "") {
        alert("Будь ласка, заповніть всі обов'язкові поля.");
        return false;
    }

    if (year.length !== 4) {
        alert("Рік народження має містити рівно 4 символи.");
        return false;
    }
}

function showDateTime() {
    const now = new Date();
    document.getElementById("currentDate").innerText = now.toLocaleDateString();
    document.getElementById("currentTime").innerText = now.toLocaleTimeString();
}

setInterval(showDateTime, 1000);