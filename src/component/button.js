const Button = ({ className, buttonText, style }) => {
    return (
        <div className={style}>
            <button className={className}>{buttonText}</button>
        </div>
    )
}
export default Button;