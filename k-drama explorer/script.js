// ========= drama grid ===============

const dramaGrid = document.querySelector(".drama-grid");

dramas.forEach((drama) => {
    dramaGrid.innerHTML += `
        <div class="drama-card" data-id = "${drama.id}">
            <img src="${drama.poster}" alt="${drama.title}">
            <h3>${drama.title}</h3>
            <p>${drama.year}</p>
        </div>
    `;
});

// ======= modal ========


const dramaModal = document.getElementById("dramaModal");
const modalBody = dramaModal.querySelector(".modal-body");


dramaGrid.addEventListener('click', (e) => {


    if (e.target.closest(".drama-card") === null) {
        return;
    }

    let selectedDrama = dramas.find((drama) => {

        return drama.id === Number(e.target.closest(".drama-card").getAttribute("data-id"));

    })

    modalBody.innerHTML = `
    <div class="modal-drama-info">

        <img src="${selectedDrama.poster}" alt="${selectedDrama.title}">

        <div class="drama-details">
            <h2>${selectedDrama.title}</h2>
            <p>${selectedDrama.originalTitle}</p>

            <p>Release Year: ${selectedDrama.year}</p>
            <p>Premiere Date: ${selectedDrama.premiereDate}</p>

            <p>Genres: ${selectedDrama.genres.join(", ")}</p>

            <h3>Cast</h3>
            <ul>
                ${selectedDrama.cast.map((member) => `
                    <li>
                        <strong>${member.actor}</strong>
                        <span> as ${member.character}</span>
                    </li>
                `).join("")}
            </ul>

            <h3>Synopsis</h3>
            <p>${selectedDrama.synopsis}</p>
        </div>

    </div>
`;

    dramaModal.style.display = "block"
})

// ===== close modal =====

const close = document.querySelector(".close");
close.addEventListener('click', () => {
    dramaModal.style.display = "none";
})

dramaModal.addEventListener('click', (e) => {
    if (e.target === dramaModal) {
        dramaModal.style.display = "none";

    }

})

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        dramaModal.style.display = "none";

    }

})

// ===== Search Input for drama name and actor =======

const searchInput = document.getElementById("searchDramas");
const genreFilter = document.getElementById("genre");


searchInput.addEventListener('input' , () => {
    const filteredDramas = dramas.filter((drama) => {
        // FIX: also respect the selected genre
        const matchesSearch = drama.title.toLowerCase().includes(searchInput.value.toLowerCase());
        const matchesGenre = genreFilter.value === "All" || drama.genres.includes(genreFilter.value);

        return matchesSearch && matchesGenre;

    })
        // Clear existing cards
    dramaGrid.innerHTML = "";

    // Render filtered dramas
    filteredDramas.forEach((drama) => {
        dramaGrid.innerHTML += `
            <div class="drama-card" data-id="${drama.id}">
                <img src="${drama.poster}" alt="${drama.title}">
                <h3>${drama.title}</h3>
                <p>${drama.year}</p>
            </div>
        `;
    });
    
})


// filter

genreFilter.addEventListener("change", () => {

    const selectedGenre = genreFilter.value;

    const filteredDramas = dramas.filter((drama) => {
        // FIX: "all" -> "All" (matches the option value)
        const matchesGenre = selectedGenre === "All" || drama.genres.includes(selectedGenre);
        // FIX: also respect the search text
        const matchesSearch = drama.title.toLowerCase().includes(searchInput.value.toLowerCase());

        return matchesGenre && matchesSearch;
    });

    dramaGrid.innerHTML = "";

    filteredDramas.forEach((drama) => {
        dramaGrid.innerHTML += `
            <div class="drama-card" data-id="${drama.id}">
                <img src="${drama.poster}" alt="${drama.title}">
                <h3>${drama.title}</h3>
                <p>${drama.year}</p>
            </div>
        `;
    });

});