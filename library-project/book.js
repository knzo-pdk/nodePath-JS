let library = [];

function addToLibrary() {
    //do stuff
}

function Book(name, author, pages, status){
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.readOrNot = status,
    displayBook = function() {
    }
}

// // Get a reference to the button element
window.addEventListener('load', function() {

    const showFormButton = document.getElementById("library-add");
    const myForm = document.getElementById("book-form");
    const getName = document.getElementById("name");
    const getAuthor = document.getElementById("author");
    const getPages = document.getElementById("pages");
    const isRead = document.getElementById("read");
    const showAll = document.getElementById("show-all");
    const addBook = document.getElementById("add-book");

    
    showFormButton.addEventListener("click", function(event) {
        event.preventDefault();
        myForm.style.display = "block";
        
    });

    addBook.addEventListener("click", function(event) {
        event.preventDefault();
        myForm.style.display = "block";
        const addThisBook = new Book(getName.value, getAuthor.value, getPages.value, isRead.value);
        library.push(addThisBook);
    });

    //problem: this closes the form when the user clicks
    showAll.addEventListener("click", function(event) {
        event.preventDefault();
        library.forEach(function(element) {
            console.log(element);
        });
    });

});






