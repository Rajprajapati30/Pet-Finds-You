// Display animal info from query params
function getParam(param){
    return decodeURIComponent(new URLSearchParams(window.location.search).get(param));
}

document.getElementById("petName").innerText = getParam("name");
document.getElementById("petDesc").innerText = getParam("desc");
document.getElementById("petImg").src = getParam("img");

// Adoption form submission
document.getElementById("adoptionForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const address = document.getElementById("userAddress").value.trim();
    const contact = document.getElementById("userContact").value.trim();
    const reason = document.getElementById("userReason").value.trim();

    if(!name || !address || !contact || !reason){
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your adoption request has been submitted successfully.`);
    document.getElementById("adoptionForm").reset();
});