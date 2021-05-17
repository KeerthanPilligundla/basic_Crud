import express from 'express'
import {getUsers,addUser,getUserById,updateUserById,deleteUser} from '../controllers/user-controller.js'
const route=express.Router();

route.get('/',getUsers)
route.post('/add',addUser)
route.get('/:id',getUserById)
route.put('/:id',updateUserById)
route.delete('/:id',deleteUser)

export default route;