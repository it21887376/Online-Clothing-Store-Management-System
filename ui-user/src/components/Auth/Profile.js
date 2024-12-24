import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";

function Home() {
  const id = window.sessionStorage.getItem("userID");
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/user/${id}`).then((response) => {
      setName(response.data.Name);
      setEmail(response.data.email);
      setNumber(response.data.Number);

      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  function updateUsers() {
    axios
      .patch(`http://localhost:4000/api/v1/user/${id}`, {
        Name: name,
        email: email,
        Number: number,
      })
      .then((response) => {
        window.location.reload();
        alert("successfull updated");
      })
      .catch((error) => {
        alert("Sorry, Something Error...");
      });
  }

  function logout() {
    window.localStorage.clear();

    window.location = "/signin";
  }
  return (
    <center>
      <div style={{ marginBottom: "100px", marginTop: "100px" }}>
        <div>
          <input
            defaultValue={user.Name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "250px",
              height: "40px",
              borderRadius: "10px",
              marginRight: "30px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={user.email}
            style={{
              width: "250px",
              height: "40px",
              borderRadius: "10px",
              marginRight: "30px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          />
        </div>
        <div>
          <input
            onChange={(e) => setNumber(e.target.value)}
            defaultValue={user.Number}
            style={{
              width: "250px",
              height: "40px",
              borderRadius: "10px",
              marginRight: "30px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          />
        </div>
      </div>

      <Button
        variant="contained"
        onClick={updateUsers}
        style={{
          width: "150px",
          height: "40px",
          marginBottom: "20px",
          marginRight: "10px",
        }}
      >
        Update
      </Button>
      <Button
        variant="contained"
        onClick={logout}
        style={{ width: "150px", height: "40px", marginBottom: "20px" }}
      >
        Logout
      </Button>
    </center>
  );
}

export default Home;
