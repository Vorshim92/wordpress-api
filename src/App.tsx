import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Viewpost from "./components/BlogPost/ViewPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Container fluid>
          <Row>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:postId" element={<Viewpost />} />
            </Routes>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
