// Handles
const etch_grid = document.getElementById("grid-container");
const btn_size_option = document.querySelectorAll(".size-option");

// Creates grid based on size
function createGrid (size) {
    clearGrid();
    etch_grid.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); 
                                    grid-template-rows: repeat(${size}, 1fr)`);
    for (let i = 0, n = size * size; i < n; i++)
    {
        const etch_cell = document.createElement('div');
        etch_cell.classList.add('etch-cell', 'grid-lines');
        etch_grid.appendChild(etch_cell);
    }
    //alert(etch_grid_height + ", " + cell_size);
}

function clearGrid() {
    const all_etch_cells = document.querySelectorAll('.etch-cell');
    all_etch_cells.forEach((cell) => {
        etch_grid.removeChild(cell);
    })
}

btn_size_option.forEach((btn) => {
    btn.addEventListener("click", () => {
        createGrid(btn.id);
    })
})