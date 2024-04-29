import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Container fluid>
          <Row>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
