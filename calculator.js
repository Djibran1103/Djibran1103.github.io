function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function inverse() {
    let display = document.getElementById("display");
    display.value = 1 / parseFloat(display.value);
  }
  
function square() {
    let display = document.getElementById("display");
    display.value = parseFloat(display.value) ** 2;
  }
  
function squareRoot() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
  }
function percentage() {
    let display = document.getElementById("display");
    display.value = parseFloat(display.value) / 100;
  }
    