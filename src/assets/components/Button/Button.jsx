const Button = ({ title, type, bgColor, textColor, textTransform, rounded, icon }) => {
    return ( 
        <button type={ type } className="btn py-2 px-4 border-0 fw-bold" style={{ backgroundColor: bgColor, color: textColor, textTransform: textTransform, borderRadius: rounded }}>{ title } <img src={icon} alt="" /></button>
    )
}

export default Button;