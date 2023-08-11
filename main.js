let students = [
    {
        id: 1,
        name: "Duc Anh",
        email: "leeducanh03@gmail.com",
        phone: "0877115109",
        address: "Hà Nội",
        gender: "Nam",
    },
    {
        id: 2,
        name: "Anh Duc",
        email: "abc@gmail.com",
        phone: "0123456789",
        address: "Nội Hà",
        gender: "Nữ",
    }
];

// Hiển thị ra giao diện (READ)
function newTable(a = students) {
    let string = '';
    for (let i = 0; i < a.length; i++) {
        let element = a[i];
        string += `
          <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                    <td>${element.address}</td>
                    <td>${element.gender}</td>
                     <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>`
    }
    document.getElementById("tbody").innerHTML = string;

}
newTable();

// Id
function idTutang() {
    let idMax = 0;
    for (let i = 0; i < students.length; i++) {
        if (idMax < students[i]) {
            students[i] = idMax;
        }
    }
    return idMax++;
}

// Thêm học viên (Create)

function addStudent(e) {
    e.preventDefaut();
    let newId = idTutang();
    let newName = document.getElementById("name").value;
    let newEmail = document.getElementById("email").value;
    let newPhone = document.getElementById("phone").value;
    let newAddress = document.getElementById("address").value;
    let newgender1 = document.getElementById("gender1").value;
    let newgender2 = document.getElementById("gender2").value;
    const newElement = {
        id: newId,
        name: newName,
        email: newEmail,
        phone: newPhone,
        address: newAddress,
        gender1: newgender1,
        gender2: newgender2,
    }
    students.push(newElement);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("gender1").value = "";
    document.getElementById("gender2").value = "";
    newTable();
}

// Xóa học viên (Delete)
function delStudent(id) {
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        let idx = students.findIndex(el => el.id == id)
        students.splice(idx, 1)
        newTable();
    }
}
console.log(delStudent);

// Edit Update
function beforeEdit(id) {
    document.getElementById("question").style.display = "block";
    const currentElement = students.find(el => el.id == id);
    console.log(currentElement);
    document.getElementById("editName").value = currentElement.name;
    document.getElementById("editEmail").value = currentElement.email;
    document.getElementById("editPhone").value = currentElement.phone;
    document.getElementById("editAddress").value = currentElement.address;
    document.getElementById("editGender").value = currentElement.gender;
    localStorage.setItem("currentElemmentId", JSON.stringify(id));

}

function onUpdate() {
    let id = JSON.parse(localStorage.getItem("currentElementId"));
    let currentElement = students.find(el => el.id == id);
    currentElement.name = document.getElementById("editName").value;
    currentElement.name = document.getElementById("editEmail").value;
    currentElement.name = document.getElementById("editPhone").value;
    currentElement.address = document.getElementById("editAddress").value;
    currentElement.gender = document.getElementById("editGender").value;
    newTable();
    onCancel();
}
function onCancel() {
    document.getElementById("question").style.display = 'none';
    localStorage.removeItem("currentElementId");
}

// Search học viên
function findStudent() {
    let text = document.getElementById("search").value;
    let foundStudent = students.filter(stu => stu.name.toLowerCase().includes(text.trim().toLowerCase()));
    newTable(foundStudent);
}

// Sắp xếp alpha b
function arrangeStudent() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    showTable();
}

function searchStudent() {
    let textSearch = document.getElementById("search").value;
    let findStudent = students.filter(student => student.name.toLowerCase().includes(textSearch.trim().toLowerCase()))
    showTable(findStudent);
}