const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://db-user:testing%40123@cluster0.tzgys.mongodb.net/ecommerce_db?retryWrites=true&w=majority', 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('Database connection SUCCESS')
    }catch (err){
        console.log(err);
    }
};

module.exports = connectDB;

// const connectDB = () => {
//     mongoose.connect('mongodb+srv://db-user:testing%40123@cluster0.tzgys.mongodb.net/ecommerce_db?retryWrites=true&w=majority', {
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, err =>{
//         if(err) throw err;
//         console.log('Database connection SUCCESS');
//     })
// }

// const connectDB = () => {
//     mongoose.connect('mongodb+srv://db-user:testing%40123@cluster0.tzgys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
//   // we're connected!
// });
// }