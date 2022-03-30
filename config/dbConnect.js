import mongoose from "mongoose";

const dbConnect = () => {
   if (mongoose.connection.readyState >= 1) {
      return
   }
   mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   }).then(con => console.log("Connected to local database "))
}


// Option plus

// const db = { connect, disconnect, convertDocToObj };
// export default db;

// async function disconnect() {
//    if (connection.isConnected) {
//       if (process.env.NODE_ENV === 'production') {
//          await mongoose.disconnect();
//          connection.isConnected = false;
//       } else {
//          console.log('not disconnected');
//       }
//    }
// }

//Mongo DB solving issue with conversion
// function convertDocToObj(doc) {
//    doc._id = doc._id.toString();
//    doc.createdAt = doc.createdAt.toString();
//    doc.updatedAt = doc.updatedAt.toString();
//    return doc;
// }


export default dbConnect;
