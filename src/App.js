import axios from "axios";
import React, { useEffect, useState } from "react";
import AddUser from "./components/addUser/AddUser";
import User from "./components/user/User";

const App = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () =>
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((error) => console.log(error));

  const onDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setListOfUser(listOfUser.filter((userItem) => userItem.id !== id));
  };

  const onEdit = async (id, name) => {
    await axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => {
        const updatedUsers = listOfUser.map((user) => {
          if (user.id === id) {
            user.name = name;
          }
          return user;
        });

        setListOfUser(updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const onAdd = async (newUser) => {
    await axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        setListOfUser([...listOfUser, res.data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container">
        {listOfUser.map((user) => (
          <User user={user} key={user.id} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
      <AddUser onAdd={onAdd} />
    </>
  );
};

export default App;
