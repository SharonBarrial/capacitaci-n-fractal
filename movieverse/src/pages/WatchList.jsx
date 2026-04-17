import { useEffect, useState } from "react";
import MovieList from "../components/movie/MovieList";
import FormPlan from "../hooks/FormPlan";
import Clock from "../ui/Clock";

const Watchlist = () => {

    const [savedMovies, setSavedMovies] = useState(() => {
        const save = localStorage.getItem("savedMovies");
        return save ? JSON.parse(save) : [];
    });

    useEffect(() => {
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
    }, [savedMovies]);


    const [plans , setPlans] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addPlan = (plan) => {
        setPlans((prev) => [...prev, plan]);
    }


  return (
    <div className="flex gap-4 p-4">

      <div className="w-3/4">
        <h2 className="text-xl mb-4">Películas guardadas</h2>
        <MovieList movies={savedMovies} />
      </div>

      <div className="w-1/4 bg-gray-900 p-4 rounded-lg">
      <Clock />
        <h2 className="text-lg mb-2">Planes</h2> 
        <button 
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition mb-4"
            onClick={() => setShowForm(!showForm)}
        >
            + Agregar Plan
        </button>
        {showForm && <FormPlan movies={savedMovies} onAddPlan={addPlan} onClose={()=> setShowForm(false)} />}
        {plans.length === 0 && <p>No hay planes aún</p>}
        {plans.map((plan, index) => (
        <div key={index} className="mb-2">
            <p>{plan.date}</p>
            <p>{plan.time}</p>
            <p>{plan.movie}</p>
        </div>
        ))}
      </div>

    </div>
  );
};

export default Watchlist;