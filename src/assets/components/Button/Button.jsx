const Button = ({ title, type, bg_color }) => {
    return ( 
        <button type={ type } className="btn rounded-3 text-uppercase py-2 px-4 border-0 text-white" style={{ backgroundColor: bg_color }}>{ title }</button>
    )
}

export default Button;