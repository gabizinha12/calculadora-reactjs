import React from "react";
import ReactDOM from "react-dom";
import Calculadora from "./Calculadora";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Calculadora", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("deve limpar o campo de numeros", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent(getByText("2"));
    fireEvent(getByText("C"));
    expect(getByTestId("txtNumeros")).toHaveValue("0");
  });
  it("deve somar 2 + 3 e obter 5", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent(getByText("2"));
    fireEvent(getByText("+"));
    fireEvent(getByText("3"));
    fireEvent(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("5");
  });
  it("deve subtrair 5 - 3 e obter 2", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent(getByText("5"));
    fireEvent(getByText("-"));
    fireEvent(getByText("3"));
    fireEvent(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("2");
  });
  it("deve dividir 6 / 3 e obter 2", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent(getByText("6"));
    fireEvent(getByText("/"));
    fireEvent(getByText("3"));
    fireEvent(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("2");
  });
  it("deve multiplicar 2 * 3 e obter 6", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent(getByText("2"));
    fireEvent(getByText("*"));
    fireEvent(getByText("3"));
    fireEvent(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("6");
  });
  it("deve somar 2.5 + 3 e obter 5.5", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent(getByText("2"));
    fireEvent(getByText("."));
    fireEvent(getByText("5"));
    fireEvent(getByText("+"));
    fireEvent(getByText("3"));
    fireEvent(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("5.5");
  });
});
