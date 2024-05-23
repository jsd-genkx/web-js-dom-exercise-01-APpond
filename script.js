function ChangeText() {
    const helloText = document.getElementById("hello-text");
    helloText.textContent = "JS DOM Hello World!";
    ChangeBtn(); 
}

function ChangeBtn() {
    const clickMeBtn = document.getElementById("click-me-btn");
    clickMeBtn.textContent = "Clicked!";
    clickMeBtn.style.backgroundColor = "green"; 
    clickMeBtn.style.fontSize = "10px";
    clickMeBtn.style.padding = "10px 15px"; 
    
    const helloText = document.getElementById("hello-text");
    helloText.style.color = "red";
}

document.addEventListener("DOMContentLoaded", () => {
    const clickMeBtn = document.getElementById("click-me-btn");
    clickMeBtn.addEventListener("click", ChangeText);
});

