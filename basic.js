//function to generate empty input matrix based on dimensions. MatrixId is defined when you call out the function and name the rows and cols input accordingly.

function generateMatrixInput(matrixId) {
    prevMatrix = document.getElementById("inputBox"+matrixId);
    prevMatrix.innerHTML = "";
    let rows = parseInt(document.getElementById("rows" + matrixId).value);
    let cols = parseInt(document.getElementById("cols" + matrixId).value);
    let matrixInput = document.createElement("div");
    matrixInput.id = "input" + matrixId;
    matrixInput.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement("div");
        for (let j = 0; j < cols; j++) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.required = true;
            rowDiv.appendChild(input);
        }
        matrixInput.appendChild(rowDiv);
    }
    matrixInput.appendChild(document.createElement("br"));
    document.getElementById("inputBox"+matrixId).appendChild(matrixInput);
}
