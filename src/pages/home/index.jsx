import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Home() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [sugestoes, setSugestoes] = useState([]);

  // Busca todas as sugestões do backend
  const fetchSugestoes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/sugestoes");
      setSugestoes(response.data);
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    }
  };

  useEffect(() => {
    fetchSugestoes();
  }, []);

  // Envia uma nova sugestão para o backend
  const handleSubmit = async () => {
    if (!nome || !descricao) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/sugestoes", {
        nome,
        descricao,
      });

      setNome("");
      setDescricao("");
      fetchSugestoes(); // Atualiza a lista após envio
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
          <p>
            Data de Envio: <span>{new Date(user.data_envio).toLocaleString()}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
