let button = document.querySelector("button");
let list = document.querySelector(".list");
let input = document.querySelector(".input");
let err = document.querySelector("p");




button.addEventListener("click", () => {
    if (input.value == "" || input.value == "undefined") {
        err.innerHTML = "please enter value";
        input.value = "";
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
})
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

showTask();