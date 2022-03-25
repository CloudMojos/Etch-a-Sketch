// Handles
const etch_grid = document.getElementById("grid-container");
const btn_size_option = document.querySelectorAll(".size-option");

function createGrid (size) {
    // Compute the correct cell size
    // by taking the dimension of etch_grid
    // and dividing it by size
    const etch_grid_width = etch_grid.clientWidth; // scoped here so it gives
    const etch_grid_height = etch_grid.clientHeight; // the correct dimension when clicked
    const cell_size = (etch_grid_height / size) - 0.1;

    for (let i = 0, n = size * size; i < n; i++)
    {
        const etch_cell = document.createElement('div');
        etch_cell.setAttribute('style', `height: ${cell_size}px; width: ${cell_size}px;`);
        etch_cell.classList.add('etch-cell');
        etch_grid.appendChild(etch_cell);
    }
    alert(etch_grid_height + ", " + cell_size);
}

btn_size_option.forEach((btn) => {
    btn.addEventListener("click", () => {
        createGrid(btn.id);
    })
})