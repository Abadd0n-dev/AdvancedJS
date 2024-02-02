class library {
  #books;

  allBooks() {
    return this.#books;
  }

  hasBook(title) {
    return this.#books.includes(title);
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw Error("Книга уже существует");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    if (!this.hasBook(title)) {
      throw Error("Книги нет в списке");
    }
    const id = this.#books.findIndex((e) => e === title);
    this.#books.splice(id, 1);
  }

  constructor(books) {
    if (!Array.isArray(books)) {
      throw Error("Список не является массивом");
    }
    if (
      (arr) =>
        arr.filter((item, index) => arr.indexOf(item) !== index).length === 0
    ) {
      this.#books = books;
    } else {
      throw Error("В списке содержаться дубликаты");
    }
  }
}
