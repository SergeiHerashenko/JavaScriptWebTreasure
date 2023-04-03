function LogicalTypeChecked() {
    let NumberType = document.getElementById("NumberType");
    let WorkWithCurrency = document.getElementById("WorkWithCurrency");
    let CharacterType = document.getElementById("CharacterType");
    let BinaryType = document.getElementById("BinaryType");
    let TypeDateAndTime = document.getElementById("TypeDateAndTime");
    let LogicalType = document.getElementById("LogicalType");
    let TypeInternetAddresses = document.getElementById("TypeInternetAddresses");
    let GeometricType = document.getElementById("GeometricType");
    let OtherTypes = document.getElementById("OtherTypes");

    if (LogicalType.checked) {
        document.getElementById("CharacterTypeLengthAndPrecisionTextBox").style.visibility = "hidden";
        document.getElementById("ScaleTextBox").style.visibility = "hidden";

        document.getElementById("LengthOrMaxLengthOrPrecision").textContent = "";
        document.getElementById("LabelScale").textContent = "";

        let DropDownListTypeColums = document.getElementById("DropDownListTypeColums");

        DropDownListTypeColums.innerHTML = "";

        let ArrayValues = [
            "boolean"
        ];

        for (let i = 0; i < ArrayValues.length; i++) {
            var option = document.createElement("option");
            option.text = ArrayValues[i];
            option.value = ArrayValues[i];
            DropDownListTypeColums.appendChild(option);
        }

        WorkWithCurrency.checked = false;
        CharacterType.checked = false;
        BinaryType.checked = false;
        NumberType.checked = false;
        TypeDateAndTime.checked = false;
        TypeInternetAddresses.checked = false;
        GeometricType.checked = false;
        OtherTypes.checked = false;
    }
}