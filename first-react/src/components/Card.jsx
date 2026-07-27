function Card({title, description, price}){
    return(
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-80 hover:border-cyan-500 transition-all">
            <h3 className="text-2xl font-bold text-white mb-3">
                {title}
            </h3>

            <p className="text-gray-400 mb-6 leading relaxed">
                {description}
            </p>

            {/* {price && (
                <p className="text-3xl font-bold text-cyan-400">
                    ${price}
                </p>
            )} */}
            
            {price ? (
                <p className="text-3xl font-bold text-cyan-400">
                    ${price}
                </p>
            ) : null}

            <button className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-medium transition-all">
                Agregar al carrito
            </button>
        </div>
    );

}

export default Card;