import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const userSchemaMongoose = mongoose.model('User', userSchema)

export default userSchemaMongoose;