const pixelCanvas = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function makeGrid(height, width) {
    pixelCanvas.innerHTML = ''; //EventListener calls the makeGrid() when user
    //submits size. innerHTML clears the colors when you hit submit a second
    //time
    event.preventDefault(); //stops the page from refreshing when you hit submit
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    for (let y = 0; y < height; y++) {
        let row = pixelCanvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x); // for loops create the grid
            cell.addEventListener('mousedown', function() {
                const color = document.getElementById('colorPicker').value;
                cell.style.backgroundColor = color;
                /**eventlistener chooses the cell
                          colors**/
            })
        }
    }
})
