export default function useLocal() {
  // Função para criar uma anotação
  const createNote =  (title, description, content) => {
    // Criando o objeto, na qual, eu enviarei para o localStorage

    // Verificando se o localStorage está vazio
    if (localStorage.getItem("notes") === nul) {
      // Iremos criar um localStorage, e a primeira anotação terá o id 0.
      const dataNote = {
        id: 0,
        title: title,
        description: description,
        content: content,
      };
      localStorage.setItem("notes", JSON.stringify([dataNote]));
    } else {
      // Já existe, então iremos adicionar mais uma anotação
      const existingNotes = JSON.parse(localStorage.getItem("notes"));
      const newID = existingNotes.length + 1;
      const dataNote = {
        id: newID,
        title: title,
        description: description,
        content: content,
      };
      existingNotes.push(dataNote);
      localStorage.setItem("notes", JSON.stringify(existingNotes));
    }
  };
  
  // Função para listar todas as anotações
  const showNotes = () => { 
    // Verificando se o localStorage está vazio
    if (localStorage.getItem("notes") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("notes"));
    } 
  }

  return {
    createNote,
    showNotes
  };
}
