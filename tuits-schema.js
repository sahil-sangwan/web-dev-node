import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    comments: Number,
    postedBy: {
        username: String,
        handle: String
    },
    time: String,
    title: String
}, {collection: 'tuits'});
export default schema;