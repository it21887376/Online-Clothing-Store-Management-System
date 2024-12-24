import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";

function Home() {
  return (
    <Container style={{ maxWidth: "1150px" }}>
      <div className="container">
        <img
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F03%2F02%2Fnew-clothes-clothing-rack-getty-0222-2000.jpg&q=60"
          alt="Snow"
          style={{ width: "100%" }}
        />
        <div className="centered">
          {" "}
          <h1
            style={{
              fontSize: 70,
              fontWeight: 600,
            }}
          >
            Welcome to F.T Marketing
          </h1>
        </div>
      </div>
    </Container>
  );
}

export default Home;
