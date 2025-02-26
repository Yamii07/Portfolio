function addRecommendation() {
    let input = document.getElementById("newRec");
    let text = input.value.trim();
    if (text) {
        let li = document.createElement("li");
        li.textContent = text;
        document.getElementById("recList").appendChild(li);
        alert("Recommendation added successfully!");
        input.value = "";
    }
}