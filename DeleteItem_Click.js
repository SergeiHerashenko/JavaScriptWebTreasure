function DeleteItem_Click() {

    event.preventDefault();

    let NameColum = document.getElementById("NameColums");
    let TypeColum = document.getElementById("TypeColums");

    let selceted = NameColum.options.selectedIndex;

    NameColum.remove(selceted);
    TypeColum.remove(selceted);

    ArrNameColum.splice(selceted, 1);
    ArrTypeColum.splice(selceted, 1);

    MyListName = document.getElementById("MyListName");
    MyListName.value = ArrNameColum;

    MyListType = document.getElementById("MyListType");
    MyListType.value = ArrTypeColum;
}