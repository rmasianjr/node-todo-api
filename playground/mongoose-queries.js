const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// const id = '5aadc6ebf0e208e815e9829b11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({ _id: id }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
//   })
//   .catch(e => console.log(e));

/* Challenge */
User.findById('5aad20268b132420137191be')
  .then(user => {
    if (!user) {
      return console.log('user not found');
    }
    console.log('user by Id', user);
  })
  .catch(e => console.log(e));
