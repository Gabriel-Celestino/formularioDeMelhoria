import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./style.css";

function Home() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [sugestoes, setSugestoes] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchSugestoes = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/sugestoes`);
      setSugestoes(response.data);
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchSugestoes();
  }, [fetchSugestoes]);

  const handleSubmit = async () => {
    if (!nome || !descricao) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await axios.post(`${API_URL}/api/sugestoes`, { nome, descricao });
      setNome("");
      setDescricao("");
      fetchSugestoes();
    } catch (error) {
      console.error("Erro ao enviar sugestão:", error);
      alert("Erro ao enviar sugestão. Tente novamente.");
    }
  };

  return (
    <div className="container">
      <form>
        <h1>Formulário de Melhoria</h1>
        <input
          name="Nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          name="Descrição da Melhoria"
          type="text"
          placeholder="O que você gostaria de melhoria?"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </form>

      {sugestoes.map((user, index) => (
        <div className="card" key={index}>
          <p>
            Nome: <span>{user.nome}</span>
          </p>
          <br />
          <p>
            Melhoria: <span>{user.descricao}</span>
          </p>
          <br />
          {user.data_envio ? (
            <p>
              Data de Envio:{" "}
              <span>{new Date(user.data_envio).toLocaleString()}</span>
            </p>
          ) : (
            <p>Data de Envio: <span>Não informada</span></p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
