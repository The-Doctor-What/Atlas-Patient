const magazine = document.getElementById("magazine");

const history = [
    {
        date: "07.12.2016",
        time: "13:06",
        title: "МРТ Стопа",
        fd: false,
    },
    {
        date: "26.09.2017",
        time: "17:06",
        title: "Электронейромиография (ЭНМГ)",
        fd: false,
    },
    {
        date: "07.12.2016",
        time: "13:06",
        title: "МРТ Шейного отдела позвоночника",
        fd: false,
    },
    {
        date: "26.09.2017",
        time: "17:06",
        title: "Электронейромиография...",
        fd: true,
    },
    {
        date: "07.12.2016",
        time: "13:06",
        title: "МРТ Стопа",
        fd: false,
    },
    {
        date: "26.09.2017",
        time: "17:06",
        title: "Электронейромиография...",
        fd: true,
    }
]

async function loadMagazine() {
    magazine.innerHTML = "";
    for (const element of history) {
        magazine.innerHTML += `
        <div>
            <p class="item-date">${element.date} | ${element.time} ${element.fd ? " ФД" : ""}</p>
            <p class="item-title">${element.title}</p>
        </div>
        `
    }
}

loadMagazine().then()