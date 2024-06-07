const ButtonModal = ({ dataBsTarget, title, icon }) => {
    return ( 
        <button type="button" className="btn button rounded-5 ms-4 fw-bold" data-bs-toggle="modal" data-bs-target={dataBsTarget}>{ title } <img src={icon} /></button>
    )
}

export default ButtonModal;