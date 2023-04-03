function BinaryTypeChecked() {
    let NumberType = document.getElementById("NumberType");
    let WorkWithCurrency = document.getElementById("WorkWithCurrency");
    let CharacterType = document.getElementById("CharacterType");
    let BinaryType = document.getElementById("BinaryType");
    let TypeDateAndTime = document.getElementById("TypeDateAndTime");
    let LogicalType = document.getElementById("LogicalType");
    let TypeInternetAddresses = document.getElementById("TypeInternetAddresses");
    let GeometricType = document.getElementById("GeometricType");
    let OtherTypes = document.getElementById("OtherTypes");

    if (BinaryType.checked) {
        document.getElementById("CharacterTypeLengthAndPrecisionTextBox").style.visibility = "hidden";
        document.getElementById("ScaleTextBox").style.visibility = "hidden";

        document.getElementById("LengthOrMaxLengthOrPrecision").textContent = "";
        document.getElementById("LabelScale").textContent = "";

        let DropDownListTypeColums = document.getElementById("DropDownListTypeColums");

        DropDownListTypeColums.innerHTML = "";

        let ArrayValues = [
            "bytea"
        ];

        for (let i = 0; i < ArrayValues.length; i++) {
            var option = document.createElement("option");
            option.value = ArrayValues[i];
            option.text = ArrayValues[i];
            DropDownListTypeColums.appendChild(option);
        }

        WorkWithCurrency.checked = false;
        NumberType.checked = false;
        CharacterType.checked = false;
        TypeDateAndTime.checked = false;
        LogicalType.checked = false;
        TypeInternetAddresses.checked = false;
        GeometricType.checked = false;
        OtherTypes.checked = false;
    }
}