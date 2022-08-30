import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export default function ClienteContext({ children }) {
  const [cliente, setClientes] = useState([]);
  const [todosclientes, SetTodosClientes] = useState([]);
  const [filter, setFilter] = useState("");

  const create = (client) => {
    fetch("http://localhost/2000/", {
      method: "POST",
      body: JSON.stringify(cliente),
      mode: 'no-cors',
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  const update = () => { };

  const remove = () => { };

  const list = () => {
    fetch("")
      .then((res) => res.json())
      .then((json) => SetTodosClientes(json));
  };

  // useEffect(() => {
  //   let filtered = todosclientes.filter((cliente) => {
  //     if (filter == "") return true;

  //     return (
  //       cliente.name.nome.indexOf(filter) > -1 || cliente.name.CPF.indexOf(filter) > -1 || cliente.telefone.indexOf(filter) > -1 || cliente.id == filter
  //     );
  //   });

  //   setClientes(filtered);
  // }, [todosclientes, filter]);

  return <Context.Provider value={{ cliente, create, update, remove, list, filter, setFilter }}>{children}</Context.Provider>;

};