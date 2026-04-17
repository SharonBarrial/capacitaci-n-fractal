const Button = ({
    customStyle= "",
    text = "",
    onClick = () => {},
}) => {

    const estiloFijo = "p-2 cursor-pointer rounded-md";

    return (
        <button
        className={`${estiloFijo} ${customStyle}`}
        onClick={onClick}
        >
        {text}
        </button>
    );
};

export default Button;