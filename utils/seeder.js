//We use require cause we are in NodeJs here

const Room = require('../models/room');
const mongoose = require('mongoose');


const rooms = require('../data/rooms')


//If we not use seeder seeder we go with import dbConnect()

//dbConnect(); 



// mongoose.connect('mongodb://localhost:27017/just_book_it', {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    // useFindAndModify: false,
//    // useCreateIndex: true
// })

//For ATLAS MONGODB
mongoose.connect("mongodb+srv://ZokiPoki:Zoki0ikoz!@cluster0.apljo.mongodb.net/just_book_it?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   // useFindAndModify: false,
   // useCreateIndex: true
})


//VIP Mora vo packege.json da kreirame script "seeder"

const seedRooms = async () => {
   try {

      //  await Room.deleteMany();
      // console.log('Rooms are deleted'); //da izbrise prethodno za da ne se dupliraat na povtoren seed

      // await Room.insertMany(rooms);
      // console.log('All Rooms are added.');

      // process.exit()
      console.log("Seeder is commented, uncomment the functions first")

   } catch (error) {
      console.log(error.message);
      process.exit()
   }
}

seedRooms()

