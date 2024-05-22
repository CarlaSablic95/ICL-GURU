const Button = ({ name, type }) => {
    return ( 
    <div className="">
        <button type={ type } className="btn btn-primary rounded-5 text-uppercase mb-3">{ name }</button>
    </div>
    )
}

export default Button;