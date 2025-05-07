const Button = ({texto, estilo, ...props}) => {
    return (
            <button {...props} className={"bg-gray-700 block mx-auto p-2 m-2 rounded-md shadow-md transform transition-all duration-400 hover:bg-yellow-300 hover:text-gray-700 cursor-pointer " + estilo} >{texto}</button>
    )
}

export default Button;