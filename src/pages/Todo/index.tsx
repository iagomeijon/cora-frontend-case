import { useState, useEffect, ChangeEvent } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
import { ITodoTypes } from "./types";

import "./index.css";

function Todo() {
  const [items, setItems] = useState(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<unknown>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchInputValue);
  };

  const handleDeleteTask = (id: number) => {
    const editedItems = [];

    items.map((item) => {
      if (item.id !== id) {
        editedItems.push(item);
      }
    });

    setItems(editedItems);
  };

  const handleChangeTaskStatus = (id: string, status: ITodoTypes) => {
    const reversedStatus = status === "pending" ?  "done" : "pending";

    setItems(items.map((_item) => {
        if(_item.id === id) {
          return {
            ..._item,
            status: reversedStatus
          };
        } else {
          return _item;
        }
    }));
    
  };

  useEffect(() => {
    if (search) {
      setItems((currentItems) => [
        ...currentItems,
        ...TODO_LIST.filter((item) => item.title.includes(search)),
      ]);
    }
     
  }, [search]);

  return (
    <main id="page" className="todo">
      <div>
        <img src={logoImage} alt="Cora" title="Cora" />
        <h1>Weekly to-do list &#128467;</h1>
        <h2>
          Bem-vindo ao nosso produto <i>fake</i> de <strong>to-do</strong> list
        </h2>
        <p>
          Marque como{" "}
          <strong>
            <u>done</u>
          </strong>{" "}
          as tasks que você conseguir concluir (elas já precisam renderizar com
          o status <strong>done</strong>)
        </p>
        <p className="disclaimer">
          Items obrigatórios marcados com asterisco (<strong>*</strong>)
        </p>
        <div className="todo__wrapper">
          <form className="todo__search" onSubmit={handleSearch}>
            <input
              id="search"
              placeholder="busca por texto..."
              value={searchInputValue}
              onChange={handleChange}
            />
            <button type="submit">buscar</button>
          </form>
          <ul className="todo__list">
            {items.length === 0 && (
              <span>
                <strong>Ops!!!</strong> Nenhum resultado foi encontrado
                &#128533;
              </span>
            )}
            {items.map((item, i) => {
              return (
                <li key={item.id}>
                  <span>
                    {i}
                    {item.required ? "*" : ""}.
                  </span>
                  <div className="todo__content">
                    <h3>
                      {item.title}
                      <span data-type={item.status}>{item.status}</span>
                    </h3>
                    <p>{item.description}</p>
                    {item.links && item.links.length > 0 && (
                      <div className="todo__links">
                        {item.links.map((link) => (
                          <a key={link.name} target="_blank" href={link.url}>
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="todo__actions">
                      <button onClick={() => handleDeleteTask(item.uuid)}>
                        delete
                      </button>
                      <button
                        onClick={() =>
                          handleChangeTaskStatus(item.id, item.status)
                        }
                      >
                        change to{" "}
                        <strong>
                          <u>{item.status === "done" ? "pending" : "done"}</u>
                        </strong>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Todo;
