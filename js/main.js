var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');

var siteContainer;
if (localStorage.getItem('books') != null) {
    siteContainer = JSON.parse(localStorage.getItem('books'))
    displayData(siteContainer)
}
else {
    siteContainer = []
}

function addBook() {
    if (urlValidation() == true && nameValidation()==true) {
        var book = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value,
        }
        siteContainer.push(book);
        localStorage.setItem('books', JSON.stringify(siteContainer))
        displayData(siteContainer)
        clearForm()
    }

    else {
        alert(`Site name must contain at least 3 characters
    Sit URL must be a valid one`)
    }
}
function clearForm() {
    siteNameInput.value = "";
    siteUrlInput.value = "";

}
function displayData(data) {
    var list = ``;
    for (var i = 0; i < data.length; i++)
        list += ` <tr>
        <td>${i + 1}</td>
        <td>${data[i].siteName}</td>
        <td>
        <a href="${siteContainer[i].siteUrl}" target="_blank">  <button  class="btn btn-visit  btn-sm text-center rounded-2"> <i class="fa-solid fa-eye pe-2">
        </i> Visit</button>
        </a> 
    </td>             
    <td>
        <button onclick="deleteItem(${i})" class="btn btn-delete btn-sm text-center rounded-2"> 
            <i class="fa-solid fa-trash-can"> </i> Delete 
        </button>
    </td>
         </tr>`
    document.getElementById('tableContent').innerHTML = list
}

function deleteItem(elementNumber) {
    console.log(elementNumber);
    siteContainer.splice(elementNumber, 1)
    localStorage.setItem('books', JSON.stringify(siteContainer));
    console.log(siteContainer);
    displayData(siteContainer);
}

function nameValidation() {

    var regx = /^\w{3,}(\s+\w+)*$/;

    if (regx.test(siteNameInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}

function urlValidation() {
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    if (regex.test(siteUrlInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}
