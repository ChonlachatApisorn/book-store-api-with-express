const express = require('express');
const BookController = require('../controllers/bookController')

const router = express.Router();

router.get('/book', async (req, res) => {
    const data = await BookController.getListBookController(req)
    res.send(data)
})

router.get('/book/count', async (req, res) => {
    const data = await BookController.getCountBookByCategoryController()
    res.send(data)
})

router.get('/book/:id', async (req, res) => {
    const data = await BookController.getListBookByIdController(req)
    res.send(data)
})

router.post('/book', async (req, res) => {
    const data = await BookController.addBookController(req)
    res.send(data)
})

router.patch('/book/:id', async (req, res) => {
    const data = await BookController.updateBookController(req)
    res.send(data)
})

router.delete('/book/:id', async (req, res) => {
    const data = await BookController.deleteBookByIdController(req)
    res.send(data)
})

module.exports = router;