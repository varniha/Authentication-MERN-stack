const mongoose = require("mongoose");

module.exports = () => {
    // connect with DB
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully!")
    }
    catch(error){
        console.log(error);
        console.log("Could not connect to the database!")
    }
};
