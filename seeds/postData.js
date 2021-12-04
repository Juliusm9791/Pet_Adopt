const { Post } = require('../models');

const postData = [
  {
    "title": "Test1",
    "text": "text 1111111",
    "userId": 1,
  },
  {
    "title": "Test2",
    "text": "text 2222222",
    "userId": 2,
  },
  {
    "title": "Test3",
    "text": "text 3333333",
    "userId": 3,
  },
  {
    "title": "Test4",
    "text": "text 444444",
    "userId": 4,
  },
  {
    "title": "Test5",
    "text": "text 55555555",
    "userId": 5,
  },
  {
    "title": "Test6",
    "text": "text 55555555",
    "userId": 1,
  },
  {
    "title": "Test7",
    "text": "text 55555555",
    "userId": 3,
  }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
