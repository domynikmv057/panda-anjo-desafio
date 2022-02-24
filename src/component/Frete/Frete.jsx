// Tentei realmente fazer com uma API de frete, mas
// estava complicado achar, então fiz com essa de cep,
// só para não ficar sem.

import { useState } from "react";
import axios from "axios";
import "./Frete.css";

export const Frete = () => {
  const [cep, setCep] = useState();
  const [test, setTest] = useState(false);
  const [apiData, setApiData] = useState();
  const [errorMensage, setErrorMensage] = useState();
  const handleInput = (e) => {
    setCep(e.target.value);
  };

  const Api = (cep) => {
    setApiData();
    setErrorMensage();
    const url = "https://viacep.com.br/ws/" + cep + "/json/";

    axios
      .get(url)
      .then((resp) => {
        if (resp.data.erro === true) {
          setErrorMensage("Não encontramos este CEP tente novamente");
        } else {
          setApiData(resp);
        }
      })
      .catch((err) => {
        setErrorMensage("Não encontramos este CEP tente novamente");
      });
    setTest(!test);
  };

  return (
    <section className="main-container-frete">
      <div className="frete-title">
        <p>CALCULE O FRETE</p>
        <a href="#">Não sei meu CEP</a>
      </div>

      <div className="input-and-button">
        <input
          type="text"
          name="Frete"
          id="frete"
          placeholder="Insira o CEP aqui"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button
          onClick={(e) => {
            Api(cep);
          }}
        >
          CALCULAR
        </button>
      </div>

      <div className="cep-calc">
        {apiData ? (
          <div className="cep-response-container">
            <div className="cep-response">
              <p>
                <span>Endereço: </span>
                {apiData?.data.logradouro}, {apiData?.data.bairro},{" "}
                {apiData?.data.localidade} - {apiData?.data.uf}
              </p>
            </div>
            <div className="fake-frete-calc">
              <p>{apiData ? "Frete: R$ 25,00" : ""}</p>
            </div>
          </div>
        ) : (
          <div className="cep-response">
            <p>{errorMensage}</p>
          </div>
        )}
      </div>
    </section>
  );
};
