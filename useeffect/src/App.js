import React, { useEffect, useState } from "react";
function App() {
  const [nomeP, setNomeP] = useState();
  const [nomeS, setNomeS] = useState();
  const [quantidadeP, setQuantidadeP] = useState(-1);
  const [quantidadeS, setQuantidadeS] = useState(-1);
  function PrimeiroNome(event) {
    setNomeP(event.target.value);
  }
  function SegundaNome(event) {
    setNomeS(event.target.value);
  }
  useEffect(() => {
    setQuantidadeP(quantidadeP + 1)
  }, [setNomeP]);
  useEffect(() => {
    setQuantidadeS(quantidadeS + 1);
  }, [setNomeS]);
  return (
    <>
      <div>
        <div>
          <input type="text" placeholder="Digite o Primeiro Nome" name="nomeP" onChange={PrimeiroNome} />
          <p><p>Quantas vezes foi digitado o Primeiro Nome: {quantidadeP} </p></p>
        </div>
        <div>
          <input type="text" placeholder="Digite o Segundo Nome" name="nomeS" onChange={SegundaNome} />
          <p>Quantas vezes foi digitado o Segundo Nome: {quantidadeS} </p>
        </div>
      </div>
      <p>Primeiro Nome: {nomeP}</p>
      <p>Segundo Nome: {nomeS}</p>
    </>
  );
}

export default App;
