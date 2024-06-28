let numberOfRows = 16;

function createGrid() { 
    for (let i = 0; i < (numberOfRows * numberOfRows); i++) {
        const div = [];
        div[i] = document.createElement("div");
        document.querySelector("#container").appendChild(div[i]).style.width = (600
            / numberOfRows) + "px";
        div[i].style.aspectRatio = "1 / 1";
    }
};

createGrid();

const divsGrid = document.querySelector("#container");

divsGrid.addEventListener("mouseover", (event) => {
    let target = event.target;

    event.target.style.backgroundColor = "gray"
})

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const container = document.querySelector("#container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    numberOfRows = prompt("How many rows do you want ?");

    if (numberOfRows > 100)
        alert("100 is the MAXIMUM size!")

    createGrid();
});



