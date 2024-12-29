import express from 'express'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
// import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/create', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/getAllBooking', verifyAdmin, getAllBooking)


export default router