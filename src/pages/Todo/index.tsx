import { useState, useEffect, ChangeEvent, FormEvent } from "react";

import logoImage from "../../assets/svg/logo.svg";
import { TODO_LIST } from "./initial-state";
import { ITodoTypes } from "./types";

import "./index.css";

function Todo() {
  const originalItems = TODO_LIST;

  const [items, setItems] = useState(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    if (searchInputValue.trim() === "") {
      setItems(originalItems);
    } else {
      const filteredItems = originalItems.filter((item) =>
        item.title.toLowerCase().includes(searchInputValue.toLowerCase())
      );
      setItems(filteredItems);
    }
  };

  const handleDeleteTask = (id: string) => {
    setItems(items.filter((_item) => _item.id !== id));
  };

  const handleChangeTaskStatus = (id: string, status: ITodoTypes) => {
    const reversedStatus = status === "pending" ? "done" : "pending";

    setItems(
      items.map((_item) => {
        if (_item.id === id) {
          return {
            ..._item,
            status: reversedStatus,
          };
        } else {
          return _item;
        }
      })
    );
  };

  useEffect(() => {
    if (searchInputValue === "") {
      setItems(originalItems);
    }
  }, [originalItems, searchInputValue]);

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
            {items.map((item, index) => {
              return (
                <li key={item.id}>
                  <span>
                    {index + 1}
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
                          <a
                            key={link.name}
                            target="_blank"
                            href={link?.link || link?.url}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="todo__actions">
                      <button onClick={() => handleDeleteTask(item.id)}>
                        delete
                      </button>
                      <button
                        onClick={() =>
                          handleChangeTaskStatus(
                            item.id,
                            item.status as ITodoTypes
                          )
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
