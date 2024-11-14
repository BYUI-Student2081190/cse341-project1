/** Required Varibles **/
const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;


const getAll = async (req, res) => {
    //#swagger.tags=['User']
    const result = await mongodb.getDatabase().db('project1').collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', "application/json");
        res.status(200).json(users)
    });
};

const getById = async (req, res) => {
    //#swagger.tags=['User']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project1').collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', "application/json");
        res.status(200).json(users[0])
    });
};

const createUser = async (req, res) => {
    //#swagger.tags=['User']
    const user = ({
         email: req.body.email,
         firstname: req.body.firstname, 
         lastname: req.body.lastname, 
         favcolor: req.body.favcolor, 
         birthday: req.body.birthday
        });
    const response = await mongodb.getDatabase().db('project1').collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding the user.');
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags=['User']
    const userId = new ObjectId(req.params.id);
    const user = ({
        email: req.body.email,
        firstname: req.body.firstname, 
        lastname: req.body.lastname, 
        favcolor: req.body.favcolor, 
        birthday: req.body.birthday
       });
    const response = await mongodb.getDatabase().db('project1').collection('users').replaceOne({ _id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const deleteUser = async (req, res) => {
    //#swagger.tags=['User']
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('project1').collection('users').deleteOne({ _id: userId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while removing the user.');
    }
};


/** Module Exports **/
module.exports = {getAll, getById, createUser, updateUser, deleteUser};