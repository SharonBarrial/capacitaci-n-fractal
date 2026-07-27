function Button ({text, color="blue", onClick}){
    const colorClasses = {
        blue: "bg-blue-600 hover:bg-blue-700",
        red: "bg-red-600 hover:bg-red-700",
        green: "bg-green-600 hover:bg-green-700",
};
    return (
        <button 
        onClick = {onClick}
        className = 
            {'px-6 py-3 rounded-lg text-white font-medium transition-all ${colorClasses[color]}'} 
        >
            {text}
        </button>
    );         
}

export default Button;