let bookList = [
    {
        namebook: "Harry Potter",
        author: "JK Rowling",
        year: "1995",
        category: "Fiction"
    }
]

const tableDataEl = document.querySelector('.table_data')
const booknameInput = document.querySelector('#namebook')
const authorInput = document.querySelector('#author')
const yearInput = document.querySelector('#year')
const categoryInput = document.querySelector('#category')

function renderBooks() {
    let dataHtml = ``;
    for (let i = 0; i < bookList.length; i++) {
        dataHtml += `
            <tr>
                <td>${bookList[i].namebook}</td>
                <td>${bookList[i].author}</td>
                <td>${bookList[i].year}</td>
                <td>${bookList[i].category}</td>
                <td>
                    <button class="btn btn-primary" onclick="deleteBook(${i})">Xóa</button>
                    <button class="btn btn-primary" onclick="renderDataUpdate(${i})">Sửa</button>
                </td>
            </tr>
        `
    }
    tableDataEl.innerHTML = dataHtml
}

function validateInputs() {
    let isvalid = true
    if (booknameInput.value.trim() === '') {
        alert("Không được bỏ trống")
        isvalid = false
    }
    if (authorInput.value.trim() === '') {
        alert("Không được bỏ trống")
        isvalid = false
    }
    const yearregex = /^\d{4}$/;
    if (!yearregex.test(yearInput.value.trim())) {
        alert("Phải là năm hợp lệ")
        isvalid = false
    }
    if (categoryInput.value.trim() === '') {
        alert("Không được bỏ trống")
        isvalid = false
    }
    return isvalid;
}

function addBook(e) {
    e.preventDefault();
    if (!validateInputs()) return;
    let newBook = {
        namebook: booknameInput.value,
        author: authorInput.value,
        year: yearInput.value,
        category: categoryInput.value,
    }
    bookList.push(newBook)
    renderBooks()
}

function deleteBook(index) {
    if (!(confirm("Bạn có chắc chắn xóa không?"))) {
        return
    }
    alert("xóa thành công")
    bookList.splice(index, 1)
    renderBooks()
}
renderBooks()