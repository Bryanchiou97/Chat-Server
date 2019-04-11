const users = [];

// add user
const addUser = ({ id, username, room }) => {
  // clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  // validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required"
    };
  }
  // check for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  });
  // validate username
  if (existingUser) {
    return {
      error: "username is in use!"
    };
  }
  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

addUser(
  {
    id: 22,
    username: "andrew",
    room: "hi"
  },
  () => {
    console.log("callback working?");
  }
);
addUser({
  id: 23,
  username: "b",
  room: "hi"
});
addUser({
  id: 24,
  username: "c",
  room: "hi"
});

// remove user
const removeUser = id => {
  const index = users.findIndex(user => {
    return user.id === id;
  });
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
// get user
const getUser = id => {
  const user = users.find(each => {
    return each.id === id;
  });
  return user;
};
// get users in room
const getUsersInRoom = room => {
  return users.filter(user => {
    return user.room === room;
  });
};

const userList = getUsersInRoom("hi");
console.log(userList);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
};
