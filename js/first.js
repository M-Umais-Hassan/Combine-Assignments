var rIndex, table = document.getElementById("table");

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('city').value = '';
}

function addRow() {

    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);
    
    var name = document.getElementById("name").value;
    
    var gender = document.getElementsByName('gender');
    var gender_value;
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            gender_value = gender[i].value;
        }
    }
    
    var age  = document.getElementById("age").value;
    var city  = document.getElementById("city").value;
    
    cell1.innerHTML = name;
    cell2.innerHTML = gender_value;
    cell3.innerHTML = age;
    cell4.innerHTML = city;
    cell5.innerHTML = "<button class='btn btn-danger' onclick='deleteRow(this);'>Delete</button> / <button class='btn btn-info' onclick='selectRow();'>Select</button>"

    selectRow();
}

function deleteRow(name) {
    try {
        var p=name.parentNode.parentNode;
        p.parentNode.removeChild(p);
    }catch(e) {
        alert(e);
    }
}

function selectRow() {
    for(var i=0; i<table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("city").value = this.cells[3].innerHTML;
        };
    }
}

function updateRow() {
    
    var name = document.getElementById("name").value;
    var gender = document.getElementsByName('gender');
    var gender_value;
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            gender_value = gender[i].value;
        }
    }
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;

    table.rows[rIndex].cells[0].innerHTML = name;
    table.rows[rIndex].cells[1].innerHTML = gender_value;
    table.rows[rIndex].cells[2].innerHTML = age;
    table.rows[rIndex].cells[3].innerHTML = city;

}

