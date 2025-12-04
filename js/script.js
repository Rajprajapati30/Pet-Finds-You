// Adopt Me buttons on index.html
document.querySelectorAll(".adopt-btn").forEach(btn => {
    btn.addEventListener("click", function(){
        const card = btn.closest(".animal-card");
        const name = card.querySelector("h3").innerText;
        const desc = card.querySelector("p").innerText;
        const img = card.querySelector("img").src;
        window.location.href = `adoption.html?name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(img)}`;
    });
});
