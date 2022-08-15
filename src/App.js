import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Container from 'react-bootstrap/Container';
import './App.css';


export default function App() {
  return (
    <>
    <Router>
      <Container>
        <Layout />
      </Container>
    </Router>
    </>
  );
}