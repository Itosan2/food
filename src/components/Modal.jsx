import React, { useState, useReducer } from "react";
import ModalPage from "../pages/modal/ModalPage";
import reducer from "../pages/modal/reducer";
import { CBtn } from "../util/util";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};

const Modal = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleClick = () => {
    return;
  };

  return (
    <div style={{ margin: "auto" }}>
      {state.isModalOpen && (
        <ModalPage modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
        <CBtn text="click me" onClick={handleClick} color="blue" />
      </form>
      {state.people.map((person) => {
        return (
          <div
            key={person.id}
            style={{ display: "flex", margin: "5px", gap: "20px" }}
          >
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
