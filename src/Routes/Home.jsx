import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { GlobalContext } from "../Components/utils/global.context";

const Home = () => {
  const { Theme } = useContext(GlobalContext);

  const [dentists, setDentists] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";

  const fetchDentists = async () => {
    const response = await axios.get(URL);
    setDentists(response.data);
  };

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />

    fetchDentists();
  }, []);

  const addFav = (nombre, id) => {
    const savedDentists = JSON.parse(
      localStorage.getItem("dentistsFav") || "[]"
    );
    const alreadySavedDentist = savedDentists.some(
      (dentist) => dentist.id === id
    );
    if (!alreadySavedDentist) {
      const newCard = [...savedDentists, { nombre, id }];
      localStorage.setItem("dentistsFav", JSON.stringify(newCard));
      alert("Agregaste un dentista a la lista de favoritos");
    } else {
      alert("Este dentista ya esta en tu lista de favoritos");
    }
  };

  const renderedDentists = dentists.map((dentist) => {
    return (
      <Card
        key={dentist.id}
        id={dentist.id}
        nombre={dentist.name}
        addFav={addFav}
      />
    );
  });

  return (
    <>
      <main style={{ background: Theme.backgroundHome, color: Theme.color }}>
        <h1>Home</h1>
        <div className="card-grid container">{renderedDentists}</div>
      </main>
    </>
  );
};

export default Home;
