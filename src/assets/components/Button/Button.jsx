const Button = ({ name, type, bg_color }) => {
    return ( 
    <div className="">
        <button type={ type } className="btn rounded-5 text-uppercase mb-3 border-0 text-white btn-login" style={{ backgroundColor: bg_color }}>{ name }</button>
    </div>
    )
}

export default Button;