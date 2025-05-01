const Button = ({texto, onClick, estilo, ...props}) => {
    return (
            <button {...props} className={estilo} onClick={onClick}>{texto}</button>
    )
}

export default Button;