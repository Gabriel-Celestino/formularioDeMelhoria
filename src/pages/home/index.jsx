import React, { useState, useEffect, useCallback } from "react";
import "./style.css";

function Home() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [sugestoes, setSugestoes] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchSugestoes = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/api/sugestoes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      setSugestoes(data);
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchSugestoes();
  }, [fetchSugestoes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !descricao) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/sugestoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, descricao })
      });

      const data = await response.json();

      if (data.erro) {
        alert("Erro: " + data.erro);
      } else {
        setNome("");
        setDescricao("");
        fetchSugestoes();
      }
    } catch (error) {
      console.error("Erro ao enviar sugestão:", error);
      alert("Erro ao enviar sugestão. Tente novamente.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Formulário de Melhoria</h1>
        <input
          name="Nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <textarea
          name="Descrição da Melhoria"
          placeholder="O que você gostaria de melhoria?"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {sugestoes.map((user) => (
        <div className="card" key={user.id}>
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
              Data de Envio: <span>{new Date(user.data_envio).toLocaleString()}</span>
            </p>
          ) : (
            <p>
              Data de Envio: <span>Não informada</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
