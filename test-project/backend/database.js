const mongoose = require('mongoose');

const connection = "mongodb+srv://Aika:123@cluster0.fyvmf.mongodb.net/test-project?retryWrites=true&w=majority";

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));