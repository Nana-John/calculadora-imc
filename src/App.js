import React, { useState } from "react";

const App = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = parseFloat(altura) / 100;
      const imc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      let classificacao = "";

      if (imc < 18.5) classificacao = "Abaixo do peso";
      else if (imc < 24.9) classificacao = "Peso normal";
      else if (imc < 29.9) classificacao = "Sobrepeso";
      else if (imc < 34.9) classificacao = "Obesidade grau 1";
      else if (imc < 39.9) classificacao = "Obesidade grau 2";
      else classificacao = "Obesidade grau 3";

      setResultado({ imc, classificacao });
    } else {
      alert("Por favor, preencha os campos corretamente.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculadora de IMC</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {resultado && (
        <div style={{ marginTop: "20px" }}>
          <h2>Seu IMC: {resultado.imc}</h2>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default App;
