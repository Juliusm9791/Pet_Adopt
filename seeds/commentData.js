const { Comment } = require('../models');

const commentData = [
  {
    "comment_text": "comment 11111111111111111111",
    "userId": 1,
    "postId": 2,
    "username": "Sal",
  },
  {
    "comment_text": "comment 22222222222222222",
    "userId": 2,
    "postId": 2,
    "username": "Lernantino",
  },
  {
    "comment_text": "comment 3333333333333333333333",
    "userId": 2,
    "postId": 3,
    "username": "Lernantino",
  },
  {
    "comment_text": "comment 444444444444444444444",
    "userId": 4,
    "postId": 1,
    "username": "Jordan",
  },
  {
    "comment_text": "comment 5555555555555555555",
    "userId": 2,
    "postId": 1,
    "username": "Lernantino",
  },
  {
    "comment_text": "comment 6666666666666666666",
    "userId": 3,
    "postId": 2,
    "username": "Amiko",
  },
 ];

const seedComment= () => Comment.bulkCreate(commentData);

module.exports = seedComment;
