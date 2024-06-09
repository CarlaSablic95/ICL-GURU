const Eyes = ({ color, bgColor, title }) => {
    return (
        <span className="rounded-5 py-1 px-2 fw-bold" style={{ backgroundColor: bgColor, color: color }}>{ title }</span>
    )
}

export default Eyes;