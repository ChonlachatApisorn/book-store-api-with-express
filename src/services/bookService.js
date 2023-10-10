const bookData = require('../data/db.json');

async function getListBookService(categoryQuery) {
    let getBookData
    
    if (categoryQuery) {
        getBookData = bookData.filter((book) =>
        String(book.category)
        .toUpperCase()
        .toLowerCase()
        .includes(categoryQuery.toLowerCase())
        )
    } else {
        getBookData = bookData
    }
  
    return getBookData;
}

async function getListBookByIdService(bookId) {
    const getBookData = bookData.find(book => book.book_id == bookId)

    return getBookData;
}

async function getCountBookByCategoryService() {
    const countByCategory = {};
  
    bookData.forEach((book) => {
      const category = book.category;
      if (countByCategory[category]) {
        countByCategory[category]++;
      } else {
        countByCategory[category] = 1;
      }
    });

    return countByCategory;
}

async function addBookService(body) {
    bookData.push(body)
    return body;
}

async function updateBookService(bookId, body) {
    const bookIndex = bookData.find(book => book.book_id == bookId)
    Object.assign(bookIndex, body)
    return body;
}

async function deleteBookService(bookId) {
    const bookIndex = bookData.findIndex(book => book.book_id == bookId)
    bookData.splice(bookIndex, 1)
    return bookData;
}

module.exports = {
  getListBookService,
  getListBookByIdService,
  getCountBookByCategoryService,
  addBookService,
  updateBookService,
  deleteBookService,
};
