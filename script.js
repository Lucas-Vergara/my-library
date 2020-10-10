function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + ' by ' + author + ', ' + pages  + ' pages, ' + this.read + '.')
    }
}

function addBookToLibrary() {
    let title = document.getElementById('form-title').value;
    let author = document.getElementById('form-author').value;
    let pages = document.getElementById('form-pages').value;
    let read = document.getElementById('form-read').checked;
    
    let book = new Book(title, author, pages, read)
    library.push(book)
    display()
    clearForm()

}

function deleteBook() {
    library.splice(this.id,1)
    display()
}

function changeReadStatus() {
    if (library[this.id].read == true) {library[this.id].read = false}
    else (library[this.id].read = true)
    
    display()
}

function display() {
    document.getElementById('books').innerHTML = ''
    for (let i=0; i<library.length; i++) {
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        
        if (library[i].read == true) {
            div.innerHTML = library[i].title + ', ' + library[i].author + ", " + library[i].pages + ', ' + 'read'
        } else {
            div.innerHTML = library[i].title + ', ' + library[i].author + ", " + library[i].pages + ', ' + 'not read'
        }
        let erase = document.createElement('button')
        erase.innerText = 'Erase'
        erase.id = i
        erase.addEventListener('click', deleteBook)
        div2.appendChild(erase)
        
        let readStatus = document.createElement('button')
        readStatus.innerText = 'Change Read Status'
        readStatus.id = i
        readStatus.addEventListener('click', changeReadStatus)
        div2.appendChild(readStatus)

        div3.appendChild(div);
        div3.appendChild(div2);
        document.getElementById('books').appendChild(div3)
    }
}

function clearForm() {
    document.getElementById('form-title').value = ''
    document.getElementById('form-author').value = ''
    document.getElementById('form-pages').value = ''
    document.getElementById('form-read').checked = false
}

let first = new Book('The Hobbit', 'J.R.R Tolkien', '295', true)
let second = new Book('Into Thin Air', 'Jon Krakauer', '416', true)
const library = [first, second];
display()


