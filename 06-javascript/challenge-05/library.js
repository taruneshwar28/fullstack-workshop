class Library {
  constructor() {
    this.books = [];
    this.members = [];
    this.transactions = [];
  }

  addBook(book) {
    const existing = this.books.find(b => b.isbn === book.isbn);
    if (existing) {
      existing.copies += book.copies;
    } else {
      this.books.push({ ...book });
    }
  }

  getAvailableCopies(isbn) {
    const book = this.books.find(b => b.isbn === isbn);
    if (!book) return 0;

    const borrowed = this.transactions.filter(
      t => t.isbn === isbn && !t.returnedAt
    ).length;
    return book.copies - borrowed;
  }

  searchBooks(keyword) {
    keyword = keyword.toLowerCase();
    return this.books.filter(
      b =>
        b.title.toLowerCase().includes(keyword) ||
        b.author.toLowerCase().includes(keyword)
    );
  }

  addMember(member) {
    this.members.push({ ...member });
  }

  borrowBook(memberId, isbn) {
    if (this.getAvailableCopies(isbn) <= 0) return;

    const book = this.books.find(b => b.isbn === isbn);
    const member = this.members.find(m => m.id === memberId);

    if (!book || !member) return;

    this.transactions.push({
      memberId,
      isbn,
      title: book.title,
      borrowedAt: new Date(),
      returnedAt: null
    });
  }

  returnBook(memberId, isbn) {
    const record = this.transactions.find(
      t =>
        t.memberId === memberId &&
        t.isbn === isbn &&
        !t.returnedAt
    );

    if (record) {
      record.returnedAt = new Date();
    }
  }

  getMemberHistory(memberId) {
    return this.transactions.filter(t => t.memberId === memberId);
  }

  getOverdueBooks() {
    const now = new Date();
    const days14 = 14 * 24 * 60 * 60 * 1000;

    return this.transactions.filter(
      t =>
        !t.returnedAt &&
        now - t.borrowedAt > days14
    );
  }
}

function createLibrary() {
  return new Library();
}
