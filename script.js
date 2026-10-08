const locations = {
    station: {
        title: "🚂 Станция Блэквуд",
        description: "Перрон пуст. Часы на стене показывают 3:33 — стрелки замерли. Здесь вы встретили старика-смотрителя, который сказал: «Вы вернулись. Он знал, что вы вернётесь.»",
    },
    thomas_house: {
        title: "🏠 Дом Моргана",
        description: "13, Морнинг-лейн. Серый двухэтажный дом с тёмными окнами. Дверь приоткрыта. Внутри темно, и что-то скрипит на втором этаже.",
    },
    lodge: {
        title: "⛪ Ложа",
        description: "Подземный зал под приютом св. Люции. Каменные стены, алтарь с именами, сотни свечей. Здесь проводились эксперименты. Здесь всё началось.",
    },
    cemetery: {
        title: "⚰️ Кладбище Блэквуда",
        description: "Старая часть, у восточной стены. Здесь лежат те, кто не выжил. Возможно, здесь есть могила с вашим именем.",
    },
    pharmacy: {
        title: "🏥 Аптека Кроу",
        description: "Приёмная доктора Элизабет Кроу. Здесь выписывают «Седативный раствор №4» в двойной дозе. Здесь не задают лишних вопросов.",
    },
    police: {
        title: "👮 Полицейский участок",
        description: "Участок Блэквуда. Инспектор Морган сидит здесь уже 27 лет. Он знает больше, чем говорит.",
    },
};

document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("location-info");

    document.querySelectorAll(".location").forEach((el) => {
        el.addEventListener("click", () => {
            const locId = el.dataset.location;
            const loc = locations[locId];

            if (loc) {
                infoBox.innerHTML = `
                    <h3>${loc.title}</h3>
                    <p>${loc.description}</p>
                `;
            }
        });
    });

    document.querySelectorAll('nav a').forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});