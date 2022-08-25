import React, { useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";
import "./App.css";

function App() {
  const [Nation, setNation] = useState("");
  const [Adult, setAdult] = useState("");
  const [Youth, setYouth] = useState("");
  const [Children, setChildren] = useState("");
  const [Total, setTotal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdult("");
    setChildren("");
    setTotal("");
    setYouth("");
    setNation("");

    const objt = { Nation, Adult, Youth, Children, Total };

    axios
      .post(
        "https://sheet.best/api/sheets/313fb60b-0f76-488d-af2c-11a0ad8a32f5",
        objt
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Container fluid className="container">
      <Header as="h2">DLBC Northern Europe GCK Attendnace</Header>
      <Form className="form">
        <Form.Field>
          <label>Nation</label>
          <select value={Nation} onChange={(e) => setNation(e.target.value)}>
            <option></option>
            <option>Austria</option>
            <option>Belgium</option>
            <option>Denmark</option>
            <option>Finland</option>
            <option>France</option>
            <option>Germany</option>
            <option>Netherlands</option>
            <option>Norway</option>
            <option>Poland</option>
            <option>Sweden</option>
            <option>Switzerland</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Adult</label>
          <input
            placeholder="Enter the number of adults in attendance"
            value={Adult}
            onChange={(e) => setAdult(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Youth</label>
          <input
            placeholder="Enter total number of youth in attendance"
            value={Youth}
            onChange={(e) => setYouth(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Children</label>
          <input
            placeholder="Enter the total number of children in attendnace"
            value={Children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Total</label>
          <input
            placeholder="Enter the sum of adult, youth and children"
            value={Total}
            onChange={(e) => setTotal(e.target.value)}
          />
        </Form.Field>

        <Button color="blue" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
