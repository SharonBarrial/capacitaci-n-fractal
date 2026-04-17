import { useForm } from "react-hook-form";

const FormPlan = ({movies = [], onAddPlan = () => {}, onClose = () => {}}) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        onAddPlan(data);
        reset();
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">

            <select
                {...register("movie", { required: true })}
                className="w-full mb-2 p-1"
            >
                <option value="">Selecciona una película</option>
                {movies.map((movie) => (
                    <option key={movie.id} value={movie.title}>
                        {movie.title}
                    </option>
                ))}
            </select>

            <input
                type="date"
                {...register("date", { required: true })}
                className="w-full mb-2 p-1"
            />

            <input
                type="time"
                {...register("time", { required: true })}
                className="w-full mb-2 p-1"
            />

            <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition"
            >
                Agregar Plan
            </button>
        </form>
    );
};

export default FormPlan;