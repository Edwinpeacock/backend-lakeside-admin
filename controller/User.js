const HttpStatus = require('http-status-codes');
const userAuthHandler = require('../handler/User');
const User = require('../model/User');

exports.addUser = async function (req, res) {
    try {
        const addUser = await userAuthHandler.addUser(req.body);
        res.status(HttpStatus.StatusCodes.CREATED).json(addUser);
    } catch (error) {
        console.log(error.message);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


exports.getAllUsers = async function (req, res) {
    try {
        const getAllUsers = await userAuthHandler.getAllUsers(req.body);
        res.status(HttpStatus.StatusCodes.OK).json(getAllUsers);
    } catch (error) {
        console.log(error.message);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

exports.getSingleUser = async function (req, res) {
    try {
        const getSingleUser = await userAuthHandler.getSingleUser(req.body);
        res.status(HttpStatus.StatusCodes.OK).json(getSingleUser);
    } catch (error) {
        console.log(error);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            Success: false,
            Message: "Internal Server Error"
        });
    }
}

exports.updateUser = async function (req, res) {
    try {
        const updateUser = await userAuthHandler.updateUser(req.body);
        res.status(HttpStatus.StatusCodes.OK).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            Success: false,
            Message: "Internal Server Error"
        });
    }
}

exports.deleteUser = async function (req, res) {
    try {
        const deleteUser = await userAuthHandler.deleteUser(req.body);
        console.log(deleteUser)
        res.status(HttpStatus.StatusCodes.OK).json(deleteUser);
    } catch (error) {
        console.log(error.message)
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            Success: false,
            Message: "Internal Server Error"
        });
    }
}

