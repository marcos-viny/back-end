const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://marcos:12345@cluster0.j3gmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;