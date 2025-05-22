import "./style.css";

function Home() {
  const users = [
    {
      nome: "Gabriel",
      descricao: "Add Feijao na Comida",
    },
    {
      nome: "Kamilly",
      descricao: "Add Batata Palha na Comida",
    },

    {
      nome: "Sophia",
      descricao: "Add Salada de Alface na Comida",
    },
  ];

  return (
    <>
      <div className="container">
        <form>
          <h1>Formulário de Melhoria</h1>
          <input name="Nome" type="text" placeholder="Digite seu nome" />
          <input
            name="Descrição da Melhoria"
            type="text"
            placeholder="O que você gostaria de melhoria?"
          />

          <button type="button">Enviar</button>
        </form>

        {users.map((user) => (
          <div className="card">
            <p>
              Nome: <span> {user.nome}</span>
            </p>
            <br />
            <p>
              Melhoria: <span> {user.descricao}</span>{" "}
            </p>
            <br />
            
            <p>Data de Envio:</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
