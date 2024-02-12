import express from "express";
import userSchemaMongoose from "../models/user.js";

const router = express.Router();

// create user
router.post('/users', (req, res) => {
    const user = userSchemaMongoose(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get all users
router.get('/users', (req, res) => {
    userSchemaMongoose
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchemaMongoose
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchemaMongoose
    .updateOne({ _id: id, }, { $set: {name, age, email} })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//delete a user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchemaMongoose
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

export default router;