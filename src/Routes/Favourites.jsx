import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";

const Favourites = () => {
  const { Theme } = useContext(GlobalContext);
  const navigate = useNavigate();
  const errorMessage = "no hay dentistas";
  let favouriteDentists = JSON.parse(
    localStorage.getItem("dentistsFav" || "[]")
  );
  console.log(favouriteDentists[0]);

  const deleteFav = (id) => {
    const savedDentists = JSON.parse(
      localStorage.getItem("dentistsFav") || "[]"
    );
    const alreadySavedDentist = savedDentists.some(
      (dentist) => dentist.id === id
    );
    if (alreadySavedDentist) {
      const newDentists = savedDentists.filter((dentist) => dentist.id !== id);
      localStorage.setItem("dentistsFav", JSON.stringify(newDentists));
      alert("Se borro el dentista de la lista correctamente.");
    } else {
      alert(
        "El dentista que quiere borrar no pertenece a la lista de dentistas destacados."
      );
    }
    navigate("/");
  };

  const renderedFavouriteDentists = !favouriteDentists ? (
    <div>No hay nada aca</div>
  ) : (
    favouriteDentists.map((dentist) => (
      <Card
        key={dentist.id}
        id={dentist.id}
        nombre={dentist.nombre}
        deleteFav={deleteFav}
      />
    ))
  );
  return (
    <>
      <main style={{ background: Theme.backgroundHome, color: Theme.color }}>
        <h1>Destacados</h1>
        <div>{renderedFavouriteDentists}</div>
      </main>
    </>
  );
};

export default Favourites;
