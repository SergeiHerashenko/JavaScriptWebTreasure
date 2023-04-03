const selectElement = document.getElementById("DropDownListTypeColums");

selectElement.addEventListener("change", (event) => {
    if (event.target.value == "numeric") {

        document.getElementById("CharacterTypeLengthAndPrecisionTextBox").style.visibility = "visible";
        document.getElementById("ScaleTextBox").style.visibility = "visible";

        document.getElementById("LengthOrMaxLengthOrPrecision").textContent = "Введіть Precision :";
        document.getElementById("LabelScale").textContent = "Введіть Scale :";

    }else if (event.target.value == "char") {

        document.getElementById("CharacterTypeLengthAndPrecisionTextBox").style.visibility = "visible";

        document.getElementById("LengthOrMaxLengthOrPrecision").textContent = "Введіть кількість символів строки:";

    } else if (event.target.value == "varchar") {
        document.getElementById("CharacterTypeLengthAndPrecisionTextBox").style.visibility = "visible";

        document.getElementById("LengthOrMaxLengthOrPrecision").textContent = "Введіть максимальну кількість символів строки:";
    } else{
        document.getElementById("CharacterTypeLengthAndPrecisionTextBox").style.visibility = "hidden";
        document.getElementById("ScaleTextBox").style.visibility = "hidden";

        document.getElementById("LengthOrMaxLengthOrPrecision").textContent = "";
        document.getElementById("LabelScale").textContent = "";
    }
});
