document.addEventListener("DOMContentLoaded", function () {
    const rows = 6;
    const columns = 6;

    const colorPalette = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];

    const table = document.getElementById("colorTable");

    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell(j);
            const cellNumber = i * columns + j + 1;
            cell.textContent = cellNumber;

            if (cellNumber === 2) {
                cell.addEventListener("mouseover", function () {
                    cell.style.backgroundColor = getRandomColor();
                });

                cell.addEventListener("click", function () {
                    const colorPicker = document.createElement("input");
                    colorPicker.type = "color";
                    colorPicker.addEventListener("input", function () {
                        cell.style.backgroundColor = colorPicker.value;
                    });
                    colorPicker.click();
                });

                cell.addEventListener("dblclick", function () {
                    const colorPicker = document.createElement("input");
                    colorPicker.type = "color";
                    colorPicker.addEventListener("input", function () {
                        changeColumnColor(j, colorPicker.value);
                    });
                    colorPicker.click();
                });
            }
        }
    }
    function getRandomColor() {
        return colorPalette[Math.floor(Math.random() * colorPalette.length)];
    }

    function changeColumnColor(columnIndex, color) {
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
            rows[i].cells[columnIndex].style.backgroundColor = color;
        }
    }
});