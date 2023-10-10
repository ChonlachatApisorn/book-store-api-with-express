const BookService = require('../services/bookService')

async function getListBookController(req) {
    try {
        const categoryQuery = req.query.category?.toString()
        return await BookService.getListBookService(categoryQuery)    
    } catch(err) {
        throw err
    }
}

async function getListBookByIdController(req) {
    try {
        const bookId = req.params.id
        return await BookService.getListBookByIdService(bookId)    
    } catch(err) {
        throw err
    }
}

async function getCountBookByCategoryController() {
    try {
        return await BookService.getCountBookByCategoryService()    
    } catch(err) {
        throw err
    }
}

async function addBookController(req) {
    try {
        return await BookService.addBookService(req.body)
    } catch(err) {
        throw err
    }
}

async function updateBookController(req) {
    try {
        const bookId = req.params.id
        const body = req.body

        return await BookService.updateBookService(bookId, body)
    } catch(err) {
        throw err
    }
}

async function deleteBookByIdController(req) {
    try {
        const bookId = req.params.id
        return await BookService.deleteBookService(bookId)    
    } catch(err) {
        throw err
    }
}

module.exports = {
    getListBookController,
    getListBookByIdController,
    getCountBookByCategoryController,
    addBookController,
    updateBookController,
    deleteBookByIdController
}