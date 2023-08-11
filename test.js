// idtutang
// idtutang
function idTutang() {
    let idMax = 0;
    for (let i = 0; i < students.length; i++) {
        if (idMax < students[i]) {
            students[i] = idMax;
        }
    }
    return idMax++;
}

// thêm mới (Create)
// thêm mới (Create)
function addNew(e) {
    e.preventDefault()
    let newId = idTutang();
    let newName = document.getElementById("name").value
    let newemail = document.getElementById("email").value
    let newphone = document.getElementById("phone").value
    let newAddress = document.getElementById("Address").value
    let newgender1 = document.getElementById("gender1").value;
    let newgender2 = document.getElementById("gender2").value;
    const newelement = {
        id: newId,
        name: newName,
        email: newemail,
        phone: newphone,
        Address: newAddress,
        gender: newgender1,
        gender: newgender2,
    }
    students.push(newelement);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("gender1").value = "";
    document.getElementById("gender2").value = "";
    newtable();
}

// chức năng delete
// chức năng delete
function onDelete(id) {
    if (confirm("bạn có chắc chắn muốn xóa không?")) {
        let idx = students.findIndex(el => el.id == id)
        students.splice(idx, 1)
        newtable()
    }
}

//  chức năng edit update
//  chức năng edit update
function beforeEdit(id) {
    document.getElementById('question').style.display = 'block'
    const currentElement = students.find(el => el.id == id);
    console.log(currentElement);
    document.getElementById('editName').value = currentElement.name
    document.getElementById('editEmail').value = currentElement.email
    document.getElementById('editPhone').value = currentElement.phone
    document.getElementById('editAddress').value = currentElement.Address
    document.getElementById('editgender').value = currentElement.Address
    localStorage.setItem('currentElementId', JSON.stringify(id))
}

function onUpdate() {
    let id = JSON.parse(localStorage.getItem('currentElementId'))
    let currentElement = students.find(el => el.id == id);
    currentElement.name = document.getElementById('editName').value
    currentElement.email = document.getElementById('editEmail').value
    currentElement.phone = document.getElementById('editPhone').value
    currentElement.Address = document.getElementById('editAddress').value
    currentElement.gender = document.getElementById('editgender').value
    newtable()
    onCancel()
}

function onCancel() {
    document.getElementById('question').style.display = 'none'
    localStorage.removeItem('currentElementId')
}