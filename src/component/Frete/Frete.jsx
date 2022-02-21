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
    console.log(url);

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
    <section>
      <div>
        <p>CALCULE O FRETE</p>
        <a href="#">Não sei meu CEP</a>
      </div>
      <div>
        <input
          type="text"
          name="Frete"
          id="frete"
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
      <div>
        {apiData ? (
          <div>
            <div className="cep-response">
              <p>{apiData?.data.uf}</p>
              <p>{apiData?.data.localidade}</p>
              <p>{apiData?.data.bairro}</p>
              <p>{apiData?.data.logradouro}</p>
            </div>
            <div className="fake-frete-calc">
              <p>{apiData ? "Valor do frete: R$ 25,00" : ""}</p>
            </div>
          </div>
        ) : (
          <div>
            <p>{errorMensage}</p>
          </div>
        )}
      </div>
    </section>
  );
};
