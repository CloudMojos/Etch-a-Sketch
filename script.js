// Handles
const etch_grid = document.getElementById("grid-container");
const btn_size_option = document.querySelectorAll(".size-option");
const paint = document.getElementById("paintbrush");
let all_etch_cells;
createGrid(8);

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
    all_etch_cells = document.querySelectorAll('.etch-cell');
    console.log("createGrid", all_etch_cells);
    //alert(etch_grid_height + ", " + cell_size);
    console.log("creategrid", all_etch_cells);
    all_etch_cells.forEach((cell) => {
    console.log("cells.foreach");
    cell.addEventListener('mousedown', () => {
        console.log("I ran");
        cell.setAttribute('style', `background-color: black;`);
    })
})
}



// Clears the grid. Taking each cell, removing it
function clearGrid() {
    all_etch_cells = document.querySelectorAll('.etch-cell');
    all_etch_cells.forEach((cell) => {
        etch_grid.removeChild(cell);
    })
}

// Activate painting

//
btn_size_option.forEach((btn) => {
    console.log("btn.foreach");
    btn.addEventListener("click", () => {
        all_etch_cells = document.querySelectorAll('.etch-cell');
        createGrid(btn.id);
    })
})