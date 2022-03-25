// Handles
const etch_grid = document.getElementById("grid-container");
const btn_size_option = document.querySelectorAll(".size-option");

function createGrid (size) {
    for (let i = 0; i < size; i++)
    {
        const etch_cell = document.createElement('div');
        etch_cell.setAttribute('style', 'display: inline-block; height: 25px; width: 25px; background-color: black; float: left;');
        etch_grid.appendChild(etch_cell);
    }
}

btn_size_option.forEach((btn) => {
    btn.addEventListener("click", () => {
        createGrid(btn.id);
    })
})