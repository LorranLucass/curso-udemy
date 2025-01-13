import React from "react"; // Importa o React para criar componentes.
import { useState } from "react"; // Importa o hook useState para gerenciar o estado no componente.

const MyForm = ({ user }) => { // Define um componente funcional chamado MyForm que recebe uma prop chamada "user".
  // Gerenciamento de dados do formulário
  const [name, setName] = useState(user ? user.name : ""); // Inicializa o estado "name" com o nome do usuário, se fornecido; caso contrário, uma string vazia.
  const [email, setEmail] = useState(user ? user.email : ""); // Inicializa o estado "email" de maneira semelhante.

  const handleName = (e) => { // Função que será chamada sempre que o valor do campo de nome mudar.
    setName(e.target.value); // Atualiza o estado "name" com o valor atual do campo de entrada.
  };

  const handleSubmit = (event) => { // Função que será chamada ao enviar o formulário.
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página ao submeter o formulário.
    console.log("Enviado o formulário"); // Exibe no console uma mensagem indicando que o formulário foi enviado.
    console.log(name, email); // Exibe no console os valores atuais de "name" e "email".

    setName(""); // Reseta o estado "name" para uma string vazia.
    setEmail(""); // Reseta o estado "email" para uma string vazia.
  };

  return (
    <div onSubmit={handleSubmit}> {/* Contém o formulário e define a ação ao submeter o formulário. */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label> {/* Rótulo para o campo de entrada do nome. */}
          <input
            type="text" // Define o tipo do campo como texto.
            name="name" // Define o atributo "name" do campo.
            placeholder="Digite o seu nome:" // Texto de exemplo exibido no campo quando vazio.
            onChange={handleName} // Chama a função handleName sempre que o valor do campo mudar.
            value={name} // Liga o valor do campo ao estado "name".
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label> {/* Rótulo para o campo de entrada do email. */}
          <input
            type="email" // Define o tipo do campo como email.
            name="email" // Define o atributo "name" do campo.
            placeholder="Digite o seu email:" // Texto de exemplo exibido no campo quando vazio.
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado "email" sempre que o valor mudar.
            value={email} // Liga o valor do campo ao estado "email".
          />
        </div>
        <div>
            <label>
                <select name="cargo" id="cargo">cargos:</select>
                <option value="recruta">recruta</option>
                <option value="soldado">soldado</option>
                <option value="sargento">sargento</option>
                <option value="tenente">tenente</option>
            </label>
        </div>
        <input type="submit" value="Enviar" /> {/* Botão para submeter o formulário. */}
      </form>
    </div>
  );
};

export default MyForm; // Exporta o componente para que possa ser utilizado em outros arquivos.
