// const {MongoClient} = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to mongoDB server');

  // db
  //   .collection('Todos')
  //   .findOneAndUpdate(
  //     { _id: new ObjectID('5aad145f8541967807150228') },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     { returnOriginal: false }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });

  /* Challenge */
  db
    .collection('Users')
    .findOneAndUpdate(
      { _id: new ObjectID('5aad16978541967807150270') },
      {
        $set: { name: 'Ricardo' },
        $inc: { age: 1 }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  // db.close();
});
