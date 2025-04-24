document.getElementById("show-button").addEventListener("click", showCar);

function showCar() {
  const zodiacSelect = document.getElementById("zodiac-select").value;
  const resultContainer = document.getElementById("result");

  if (!zodiacSelect) {
    resultContainer.innerHTML = "<p>Te rog selectează o zodie!</p>";
    return;
  }

  resultContainer.innerHTML = '<p class="loading">Se încarcă...</p>';

  setTimeout(() => {
    const cars = [
      {
        name: "BMW F90 M5 Competition",
        description: "Performanță extremă și stil inconfundabil.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/BMW_M5_F90_Competition_Front_2021.jpg"
      },
      {
        name: "Mercedes-AMG GT",
        description: "Sportivă, puternică și excepțională pe drum.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/2019_Mercedes-AMG_GT_R.jpg"
      },
      {
        name: "Audi RS6 Avant",
        description: "Puternică și sportivă, dar practică pentru familie.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Audi_RS6_C8_IMG_3976.jpg"
      },
      {
        name: "Tesla Model S",
        description: "Inovatoare și futuristică, pentru vizionari.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Tesla_Model_S.jpg"
      },
      {
        name: "Ferrari 488 Spider",
        description: "Luxoasă și rapidă, pentru pasionați de viteză.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ferrari_488_Spider_IMG_2973.jpg"
      },
      {
        name: "Mazda MX-5",
        description: "Visătoare și romantică, perfectă pentru escapade.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Mazda_MX-5.jpg"
      },
      {
        name: "Mercedes-Benz G-Class",
        description: "Unic și legendar, cu performanțe pe orice teren.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Mercedes-Benz_G-Class_2018.jpg"
      },
      {
        name: "Audi A8",
        description: "Luxoasă și tehnologic avansată, pentru confortul tău.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/2019_Audi_A8_3.0T.jpg"
      },
      {
        name: "BMW X5",
        description: "SUV robust și rafinat, perfect pentru orice aventură.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/2019_BMW_X5_G05_3.0_Front.jpg"
      },
      {
        name: "Dodge Viper",
        description: "Puternică și îndrăzneață, perfectă pentru aventuri!",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dodge_Viper_GTS.jpg"
      }
    ];

    const randomCar = cars[Math.floor(Math.random() * cars.length)];

    resultContainer.innerHTML = `
      <h3>Mașina ta ideală:</h3>
      <p><strong>${randomCar.name}</strong> - ${randomCar.description}</p>
      <img src="${randomCar.image}" alt="${randomCar.name}" style="max-width: 100%; border-radius: 12px; margin-top: 10px;" />
    `;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    document.getElementById("username").textContent = loggedInUser.name;
  } else {
    window.location.href = "../signin/index.html";
  }
});