import "./Calculadora.css";
import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculadoraService from "./Calculadora.service";
function Calculadora() {
  const [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO,
  ] = CalculadoraService();
  const [txtNumeros, setTxtNumeros] = useState("0");
  const [numero1, setNumero1] = useState("0");
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function adicionarNumero(numero) {
    let resultado;
    if (operacao === null) {
      resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado);
    } else {
      resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function definirOperacao(op) {
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    if (numero2 !== null) {
      const resultado = calcular(
        parseFloat(numero1),
        parseFloat(numero2),
        operacao
      );
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoCalcular() {
    if (numero2 === null) {
      return;
    }
    const resultado = calcular(
      parseFloat(numero1),
      parseFloat(numero2),
      operacao
    );
    setTxtNumeros(resultado);
  }

  function limpar() {
    setTxtNumeros("0");
    setNumero1("0");
    setNumero2(null);
    setOperacao(null);
  }

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#007bff",
        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={limpar}>
              C
            </Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readOnly"
              value={txtNumeros}
            ></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("7")}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("8")}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("9")}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(DIVISAO)}>
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("4")}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("5")}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("6")}>
              6
            </Button>
          </Col>
          <Col>
            <Button
              variant="warning"
              onClick={() => definirOperacao(MULTIPLICACAO)}
            >
              *
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("1")}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("2")}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("3")}>
              3
            </Button>
          </Col>
          <Col>
            <Button
              variant="warning"
              onClick={() => definirOperacao(SUBTRACAO)}
            >
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("0")}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(".")}>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={acaoCalcular}>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(SOMA)}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
