document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");
    const today = new Date(); // Hakee päivämäärän nyt
    const currentDay = today.getDate(); // Päivän numero
    const currentMonth = today.getMonth(); // Kuukausi (0 = tammikuu, 11 = joulukuu)

    // Linkit videoihin
    const videoLinks = [
        "https://youtu.be/WNs7fZ9oAu8",  // Luukku 1
        "https://youtu.be/bFVwdcSUO2o",  // Luukku 2
        "https://youtu.be/GxwG9Bn2Wrw",  // Luukku 3
        "https://youtu.be/OVEk4KcBkEM",  // Luukku 4
        "https://youtu.be/j1LXYpvdpNE",  // Luukku 5
        "https://youtu.be/A0Kl01Dabgk",  // Luukku 6
        "https://youtu.be/cBJiK2pV5CQ",  // Luukku 7
        "https://youtu.be/KQZG5tUtR_k",  // Luukku 8
        "https://youtu.be/MvPHOcqY3wo",  // Luukku 9
        "https://youtu.be/QjIOkFX9Ntg", // Luukku 10
        "https://youtu.be/K6_po_B1cAc", // Luukku 11
        "https://youtu.be/HY4SM9fxiX4", // Luukku 12
        "https://youtu.be/leA3oeotRqU", // Luukku 13
        "https://youtu.be/P7pA-w3u-aE", // Luukku 14
        "https://youtu.be/p1B4UVxuvGM", // Luukku 15
        "https://youtu.be/_rCMBjyE_68", // Luukku 16
        "https://youtu.be/iEXf4zruf7w", // Luukku 17
        "https://youtu.be/MnE8FPW-4-o", // Luukku 18
        "https://www.example.com/video-19", // Luukku 19
        "https://www.example.com/video-20", // Luukku 20
        "https://www.example.com/video-21", // Luukku 21
        "https://www.example.com/video-22", // Luukku 22
        "https://www.example.com/video-23", // Luukku 23
        "https://www.example.com/video-24", // Luukku 24
        "https://www.example.com/video-25", // Luukku 25
    ];

    // Lumisade
    function createSnowflakes() {
        const snowflakeCount = 50; // Lumihiutaleiden määrä
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.innerHTML = "&#10052;"; // Lumihiutaleen symboli
            snowflake.style.left = `${Math.random() * 100}vw`; // Satunnainen sijainti vaakasuunnassa
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Satunnainen kesto
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // Satunnainen viive
            document.body.appendChild(snowflake);
        }
    }

    // Tässä varsinaisesti luodaan ne lumihiutaleet
    createSnowflakes();

    doors.forEach(door => {
        const day = parseInt(door.getAttribute("data-day"));
        
        if (currentMonth === 11 && day <= currentDay) {
            // Luukku voidaan avata vain joulukuussa ja oikeana päivänä
            door.addEventListener("click", () => {
                door.classList.add("open");
                window.location.href = videoLinks[day - 1]; // Haetaan oikea video taulukosta
            });
        } else {
            // Estetään klikkaukset ennen joulukuuta
            door.style.pointerEvents = "none";
            door.style.opacity = "0.6";
            door.style.cursor = "not-allowed";
        }
    });
});
