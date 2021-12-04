const User = require('./user');
const Pet = require('./pet');
const Message = require('./message');


Pet.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Pet, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Message.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Message, {
  foreignKey: 'userId',
});

Message.belongsTo(Pet, {
  foreignKey: 'petId',
});

Pet.hasMany(Message, {
  foreignKey: 'petId',
  onDelete: 'CASCADE',
});

module.exports = { User, Pet, Message, };
