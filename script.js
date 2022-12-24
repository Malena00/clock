const switchHourBtn = document.getElementById("hour_button");

let hourBtnFormat = document.getElementById("hour_button");
let getTime = document.getElementById("time");
let isTwelveHour = true;
let amPm = " ДО ПОЛУДНЯ";
let days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
];

//Добавление 0 перед числами, которые меньше 10
function checkTime(i) {
    if (i < 10) {
        i = `0${i}`;
    }
    return i;
}

//Выведение даты
function CurrentDate() {
    let day = document.querySelector(".day");
    let month = document.querySelector(".month");
    let year = document.querySelector(".year");
    let date = new Date();
    let months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];

    day.innerHTML = date.getDate();
    month.innerHTML = months[date.getMonth()];
    year.innerHTML = date.getFullYear();
}

//Подсвечивание дня недели
function switchDayOfWeek() {
    let className = `.${days[(new Date()).getDay()]}`;
    let element = document.querySelector(className);
    element.classList.add("glow");
}

//Проверка формата, выведение нужной части дня и вывод времени
function ShowAll() {
    let format = "12";
    let today = new Date();
    let h = today.getHours();

    if (h > 12) {
        amPm = " ПОСЛЕ ПОЛУДНЯ";
    }
    else {
        amPm = " ДО ПОЛУДНЯ"
    }

    if (isTwelveHour) {
        format = "24";
        if (h >= 12) {
            h = h - 12;
        }
    }
    else {
        format = "12";
    }
    hourBtnFormat.innerHTML = `${format} ЧАСОВОЙ ФОРМАТ`;

    let m = today.getMinutes();
    let s = today.getSeconds();
    //Вызов функции checkTime
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);

    CurrentDate();
    switchDayOfWeek();

    getTime.innerHTML = `${h} : ${m} : ${s} ${amPm}`;
    time = setTimeout(function () {
        ShowAll();
    }, 500);
}

ShowAll();

switchHourBtn.addEventListener("click", function () {
    isTwelveHour = !isTwelveHour;
});


