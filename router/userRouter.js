const express = require("express");
const Router = express.Router();
const UserController=require('../controller/userController')

Router.post('/',UserController.user_create); //for all post
Router.get('/',UserController.user_all); //for all data get
Router.get('/:userId',UserController.user_details); //for single data receive
Router.put('/:userId',UserController.user_update); //for single post upate
Router.delete('/:userId',UserController.user_delete); //for single post delete

module.exports = Router;
