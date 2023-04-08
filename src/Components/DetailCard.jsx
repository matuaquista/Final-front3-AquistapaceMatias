import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "./utils/global.context";

const DetailCard = () => {
  const { Theme } = useContext(GlobalContext);
  const { id } = useParams();
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [dentist, setDentist] = useState({});

  const fetchDentist = async () => {
    const response = await axios.get(URL);
    setDentist(response.data);
  };

  useEffect(() => {
    fetchDentist();
  }, []);
  return (
    <>
      <main style={{ background: Theme.backgroundHome, color: Theme.color }}>
        <h1>Detail about Dentist {dentist.name} </h1>
        <section className="card col-sm-12 col-lg-6 container">
          {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
          <div className={`card-body row`}>
            <div className="col-sm-12 col-lg-6">
              <ul className="list-group">
                <li className="list-group-item">Nombre: {dentist.name}</li>
                <li className="list-group-item">Email: {dentist.email}</li>
                <li className="list-group-item">Telefono: {dentist.phone}</li>
                <li className="list-group-item">Website: {dentist.website}</li>
              </ul>
              {/* <div className="text-center"> */}
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              {/* <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button}`}
              >
                Marcar consulta
              </button> */}
              {/* </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailCard;
