const animals = [
    { name: "Kalu", description: "Playful and curious kitten who loves cuddles.", year: 2021, type: "Cat", img: "images/cat-c1.webp" },
    { name: "Coco", description: "Friendly dog full of love and energy.", year: 2020, type: "Dog", img: "images/dog-d1.jpg" },
    { name: "Snow and White", description: "Gentle rabbits looking for a warm family.", year: 2022, type: "Rabbit", img: "images/rabbit-r1.jpeg" },
    { name: "Musi and Kale", description: "Sweet dogs that enjoys walks and treats.", year: 2023, type: "Dog", img: "images/dog-d2.jpeg" },
    { name: "Heaven", description: "Energetic kitten who loves to play.", year: 2022, type: "Cat", img: "images/cat-c2.jpeg" },
    { name: "Thumper", description: "Calm rabbit who enjoys quiet spaces.", year: 2021, type: "Rabbit", img: "images/rabbit-r2.webp" },
    { name: "Max", description: "Loyal dog who loves companionship.", year: 2023, type: "Dog", img: "images/dog-d3.jpeg" },
    { name: "Luna", description: "Curious kitten who loves attention.", year: 2023, type: "Cat", img: "images/cat-c3.jpeg" },
    { name: "Clover", description: "Friendly dog that enjoys human interaction.", year: 2020, type: "dog", img: "images/dog-d4.jpg" }
];

const galleryGrid = document.getElementById("galleryGrid");

function renderGallery(filteredAnimals){
    galleryGrid.innerHTML = "";
    filteredAnimals.forEach(animal => {
        const card = document.createElement("div");
        card.classList.add("animal-card");
        card.innerHTML = `
            <img src="${animal.img}">
            <div class="card-content">
                <h3>${animal.name}</h3>
                <p>${animal.description}</p>
                <p><strong>Year:</strong> ${animal.year}</p>
                <p><strong>Type:</strong> ${animal.type}</p>
                <button class="adopt-btn">Adopt Me</button>
            </div>
        `;
        galleryGrid.appendChild(card);
    });

    // Adopt button click
    document.querySelectorAll(".adopt-btn").forEach(btn => {
        btn.addEventListener("click", function(){
            const card = btn.closest(".animal-card");
            const name = card.querySelector("h3").innerText;
            const desc = card.querySelector("p").innerText;
            const img = card.querySelector("img").src;
            window.location.href = `adoption.html?name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(img)}`;
        });
    });
}

// Initial render
renderGallery(animals);

// Filter functionality
const filterType = document.getElementById("filterType");
const filterYear = document.getElementById("filterYear");

function applyFilter(){
    const type = filterType.value;
    const year = filterYear.value;

    const filtered = animals.filter(a => 
        (type === "All" || a.type === type) &&
        (year === "All" || a.year == year)
    );

    renderGallery(filtered);
}

filterType.addEventListener("change", applyFilter);
filterYear.addEventListener("change", applyFilter);
