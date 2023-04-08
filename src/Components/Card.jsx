import styles from "./Card.module.css";
import React, { useContext } from "react";
import { GlobalContext } from "./utils/global.context";

const Card = ({ nombre, id, deleteFav, addFav }) => {
  const { Theme } = useContext(GlobalContext);
  const addThis = () => {
    addFav(nombre, id);
  };

  const deleteThis = () => {
    deleteFav(id);
  };

  const addButton = addFav ? <button className="buttonfav" onClick={addThis}>⭐️</button> : null;
  const deleteButton = deleteFav ? (
    <button className="buttonfav" onClick={deleteThis}>❌</button>
  ) : null;

  return (
    <>
      <div className={`card`} style={{ backgroundColor: Theme.backgroundCard }}>
        <div className={`card-body ${styles.CardBody}`}>
          <a href={`/dentist/${id}`}>
            <h5
              className={`card-title ${styles.title}`}
              style={{ color: Theme.colorCard }}
            >
              <div>{nombre}</div>
            </h5>
          </a>
        </div>
        {addButton}
        {deleteButton}
      </div>
    </>
  );
};

export default Card;
