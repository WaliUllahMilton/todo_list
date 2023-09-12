let button = document.querySelector("button")
let list = document.querySelector(".list")
let input = document.querySelector(".input")
let err = document.querySelector("p")




button.addEventListener("click", () => {
    if (input.value == "" || input.value == "undefined") {
        err.innerHTML = "please enter value";
        input.value = ""
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    input.value = "";
})
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target.tagName)
        e.target.classList.toggle("checked")
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
})