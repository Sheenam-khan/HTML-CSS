const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const addButton = document.querySelector('.addButton');
const updateButton = document.querySelector('.updateButton');
const table = document.querySelector('.table');
const addHere = document.querySelector('.addHere');

let currentUserIdForUpdate;
let deletebtnNew;

let array = [];
let Users = [
    {
        firstname: "seenam",
        lastname: "khan"
    },
    {
        firstname: "salman",
        lastname: "khan"
    },
    {
        firstname: "shahrukh",
        lastname: "khan"
    },
    {
        firstname: "aamir",
        lastname: "khan"
    },
    {
        firstname: "harish",
        lastname: "khan"
    },
    {
        firstname: "seenam",
        lastname: "khan"
    },
    {
        firstname: "seenam",
        lastname: "khan"
    },
    {
        firstname: "seenam",
        lastname: "khan"
    },
    {
        firstname: "seenam",
        lastname: "khan"
    },
];
function addRow() {
    if (firstName.value.trim() != '' && lastName.value.trim() != '') {
        console.log(firstName.value);
        array.push({
            firstname: firstName.value.trim(),
            lastname: lastName.value.trim()
        })
        firstName.value = '';
        lastName.value = '';
        Render();
    } else {
        alert('Please provide your firstName And lastName')
    }
}

function AddExtraUsers() {
    array = [...array, ...Users];
    Render();
}

function Render() {
    let content = "";
    addHere.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        //  console.log(array[i]);   

        let next = i + 1;
        content += ` <tr>
            <td id="${i}">${array[i].firstname}</td>
            <td >${array[i].lastname}</td>
             <td>
            <button type="button" onclick="editBtn(${i})" class=" bg-success ml-2 p-2 block editBtn">Edit</button>
        
            <button type="button" onclick="deleteBtn(${i})" class="bg-danger mr-2 p-2 deleteBtn">Delete</button>
        </td>`;

        // if(next!=array.length)
        // {
        //     datahtml+="<tr></tr>";
        // }
    }
    addHere.innerHTML = content;

}
function editBtn(a) {
    console.log(array[a].firstname);
    currentUserIdForUpdate = a;
    firstName.value = array[currentUserIdForUpdate].firstname;
    lastName.value = array[currentUserIdForUpdate].lastname;
    addButton.style.display = 'none';
    updateButton.style.display = 'block';

}
function deleteBtn(a) {
    array.splice(a, 1);
    Render();
}

function updateRow() {
    console.log(firstName.value, currentUserIdForUpdate);
    array[currentUserIdForUpdate].firstname = firstName.value;
    array[currentUserIdForUpdate].lastname = lastName.value;
    addButton.style.display = 'block';
    updateButton.style.display = 'none';
    firstName.value = '';
    lastName.value = '';
    Render();
}

updateButton.addEventListener('click', updateRow);
