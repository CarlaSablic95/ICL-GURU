const Button = ({ name, type, bg_color }) => {
    return ( 
        <button type={ type } className="btn rounded-5 text-uppercase mb-3 border-0 text-white btn-login" style={{ backgroundColor: bg_color }}>{ name }</button>
    )
}

export default Button;