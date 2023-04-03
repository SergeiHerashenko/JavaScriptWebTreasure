let ArrNameColum = []; 
let ArrTypeColum = [];

function AddInformColums_Click() {

    event.preventDefault();
    let CheckNameColum = true;

    let ValueDropDownListTypeColums = document.getElementById("DropDownListTypeColums");
    let NameColum = document.getElementById("NameColums");
    let TypeColum = document.getElementById("TypeColums");

    let optionNameColum = document.createElement("option");
    let optionTypeColum = document.createElement("option");

    let ColumName = document.getElementById("ColumName");

    let ErrorLabel = document.getElementById("ErrorOrGood");

    if (ColumName.value == "") {
        ErrorLabel.textContent = "Упс.. ви не ввели назву стовпця!"
    } else {
        ErrorLabel.textContent = ""

        if (ValueDropDownListTypeColums.value == "char") {
            let CharacterTypeLengthAndPrecisionTextBox = document.getElementById("CharacterTypeLengthAndPrecisionTextBox");

            if (CharacterTypeLengthAndPrecisionTextBox.value == "") {
                ErrorLabel.textContent = "Введіть кількість символів в рядку!"
            } else {

                for (let i = 0; i < ArrNameColum.length; i++) {
                    if (ColumName.value === ArrNameColum[i]) {
                        CheckNameColum = false;
                        ErrorLabel.textContent = "Назва такого стовчика вже існує!"
                        break;
                    }
                }

                if (CheckNameColum == true) {
                    if (!isNaN(CharacterTypeLengthAndPrecisionTextBox.value)) {

                        MyListName = document.getElementById("MyListName");
                        ArrNameColum.push(ColumName.value);
                        optionNameColum.text = ColumName.value;
                        NameColum.add(optionNameColum);

                        optionTypeColum.text = ValueDropDownListTypeColums.value + "(" + CharacterTypeLengthAndPrecisionTextBox.value + ")";
                        TypeColum.add(optionTypeColum);
                        MyListName.value = ArrNameColum;
                        ArrTypeColum.push(optionTypeColum.text);
                        MyListType = document.getElementById("MyListType");
                        MyListType.value = ArrTypeColum;
                        CharacterTypeLengthAndPrecisionTextBox.value = "";
                        ColumName.value = "";
                    } else {
                        ErrorLabel.textContent = "Ви ввели не ціле число!";
                    }
                }
            }
        } else if (ValueDropDownListTypeColums.value == "varchar") {
            let CharacterTypeLengthAndPrecisionTextBox = document.getElementById("CharacterTypeLengthAndPrecisionTextBox");

            if (CharacterTypeLengthAndPrecisionTextBox.value == "") {
                ErrorLabel.textContent = "Введіть максимальну кількість символів в рядку!"
            } else {

                for (let i = 0; i < ArrNameColum.length; i++) {
                    if (ColumName.value === ArrNameColum[i]) {
                        ErrorLabel.textContent = "Назва такого стовчика вже існує!"
                        CheckNameColum = false;
                        break;
                    }
                }

                if (CheckNameColum == true) {
                    if (!isNaN(CharacterTypeLengthAndPrecisionTextBox.value)) {
                        ArrNameColum.push(ColumName.value);
                        optionNameColum.text = ColumName.value;
                        NameColum.add(optionNameColum);

                        MyListName = document.getElementById("MyListName");
                        MyListName.value = ArrNameColum;

                        optionTypeColum.text = ValueDropDownListTypeColums.value + "(" + CharacterTypeLengthAndPrecisionTextBox.value + ")";
                        TypeColum.add(optionTypeColum);
                        ArrTypeColum.push(optionTypeColum.text);
                        MyListType = document.getElementById("MyListType");
                        MyListType.value = ArrTypeColum;
                        CharacterTypeLengthAndPrecisionTextBox.value = "";
                        ColumName.value = "";
                    } else {
                        ErrorLabel.textContent = "Ви ввели не ціле число!";
                    }
                }
            }
        } else if (ValueDropDownListTypeColums.value == "numeric") {
            let CharacterTypeLengthAndPrecisionTextBox = document.getElementById("CharacterTypeLengthAndPrecisionTextBox");
            let ScaleTextBox = document.getElementById("ScaleTextBox");

            if (CharacterTypeLengthAndPrecisionTextBox.value == "" || ScaleTextBox == "") {
                ErrorLabel.textContent = "Введіть значення precision або scale!"
            } else {
                for (let i = 0; i < ArrNameColum.length; i++) {
                    if (ColumName.value === ArrNameColum[i]) {
                        ErrorLabel.textContent = "Назва такого стовчика вже існує!"
                        CheckNameColum = false;
                        break;
                    }
                }

                if (CheckNameColum == true) {
                    if (!isNaN(CharacterTypeLengthAndPrecisionTextBox.value) && !isNaN(ScaleTextBox.value)) {
                        ArrNameColum.push(ColumName.value);
                        optionNameColum.text = ColumName.value;
                        NameColum.add(optionNameColum);

                        MyListName = document.getElementById("MyListName");
                        MyListName.value = ArrNameColum;

                        optionTypeColum.text = ValueDropDownListTypeColums.value + "(" + CharacterTypeLengthAndPrecisionTextBox.value + "," + ScaleTextBox.value + ")";
                        TypeColum.add(optionTypeColum);
                        ArrTypeColum.push(optionTypeColum.text);
                        MyListType = document.getElementById("MyListType");
                        MyListType.value = ArrTypeColum;
                        CharacterTypeLengthAndPrecisionTextBox.value = "";
                        ScaleTextBox.value = "";
                        ColumName.value = "";
                    } else {
                        ErrorLabel.textContent = "Ви ввели не ціле число!";
                    }
                }
            }
        } else if (ValueDropDownListTypeColums.value != "char" || ValueDropDownListTypeColums.value != "varchar" || ValueDropDownListTypeColums.value != "numeric" && ValueDropDownListTypeColums.value != "") {
            for (let i = 0; i < ArrNameColum.length; i++) {
                if (ColumName.value === ArrNameColum[i]) {
                    ErrorLabel.textContent = "Назва такого стовчика вже існує!"
                    CheckNameColum = false;
                    break;
                }
            }

            if (CheckNameColum == true) {
                ArrNameColum.push(ColumName.value);
                optionNameColum.text = ColumName.value;
                NameColum.add(optionNameColum);

                MyListName = document.getElementById("MyListName");
                MyListName.value = ArrNameColum;

                optionTypeColum.text = ValueDropDownListTypeColums.value;
                TypeColum.add(optionTypeColum);
                ArrTypeColum.push(optionTypeColum.text);
                MyListType = document.getElementById("MyListType");
                MyListType.value = ArrTypeColum;
                ColumName.value = "";
            }
        }
    }
}