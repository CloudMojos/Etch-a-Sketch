// Handles
const etch_grid = document.getElementById("grid-container");
const btn_size_option = document.querySelectorAll(".size-option");
const btn_paint = document.getElementById("paintbrush");
let all_etch_cells;
let isPainting = false;

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
}



// Clears the grid. Taking each cell, removing it
function clearGrid() {
    all_etch_cells = document.querySelectorAll('.etch-cell');
    all_etch_cells.forEach((cell) => {
        etch_grid.removeChild(cell);
    })
}

// Activate painting
function paintMode() {
    // enable the background painting
    etch_grid.addEventListener('mousedown', (e) => {
        console.log("enable painting");
        isPainting = true;
        if (e.target != etch_grid)
        {
            e.target.setAttribute('style', 'background-color: black');
        }
    });
    // paint
    all_etch_cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if (isPainting)
                cell.setAttribute('style', 'background-color: black');
        })    
    });

    // disable the background painting
    etch_grid.addEventListener('mouseup', () => {
        isPainting = false;
    });
}   

//
btn_size_option.forEach((btn) => {
    console.log("btn.foreach");
    btn.addEventListener("click", () => {
        all_etch_cells = document.querySelectorAll('.etch-cell');
        createGrid(btn.id);
    })
})

createGrid(8);

// make it toggle. pass boolean parameter
btn_paint.addEventListener("click", () => {
    paintMode();
});
