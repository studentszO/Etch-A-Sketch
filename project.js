let numberOfRows = 16;



for (let i = 0; i < (numberOfRows * numberOfRows); i++) {
    const div = [];
    div[i] = document.createElement("div");
    document.querySelector("#container").appendChild(div[i]).style.width = (600
         / numberOfRows) + "px";
    div[i].style.aspectRatio = "1 / 1";
}

const divsGrid = document.querySelector("#container");

divsGrid.addEventListener("mouseover", (event) => {
    let target = event.target;

    event.target.style.backgroundColor = "gray"
})

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    numberOfRows = prompt("How many rows do you want ?")
});



