function Book(name, author, pages, status){
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.readOrNot = status,
    this.info = function() {
        var string = this.name + " by " + this.author + ", " + this.pages + " pages";
        return string;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295)


console.log(theHobbit.info()) //"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"