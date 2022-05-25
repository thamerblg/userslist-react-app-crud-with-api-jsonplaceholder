import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./AddUser.css";

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      username,
      email,
      phone: +phone,
      website,
    };
    onAdd(newUser);
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setWebsite("");
  };

  return (
    <Popup
      trigger={<button className="button add-user"> Add new user </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modale">
          <div className="close" onClick={close}>
            &times;
          </div>
          <div className="header">Form for adding a new user</div>
          <div className="content">
            <form>
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-outline mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Website url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={(e) => {
                submitForm(e);
                close();
              }}
            >
              submit
            </button>
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddUser;
