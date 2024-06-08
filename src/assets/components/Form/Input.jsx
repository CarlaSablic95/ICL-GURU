export const Input = ({ label, name, type, placeholder, defaultValue }) => { // onChange // Faltaria value
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
        <span className="text-danger">*</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="form-control"
      />
    </div>
  );
};

export const Search = ({ name, type, placeholder, ariaLabel }) => { // onChange // Faltaria value
  return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control me-2 rounded-5 border-2 border-dark shadow-sm"
        style={{ width: "60%", backgroundColor: "#D7E3FC" }}
        aria-label={ariaLabel}
      />
  );
};


export const InputRadio = ({ id, name, label, defaultValue}) => {
  return (
    <div className="form-check mb-3">
      <label htmlFor={id} className="form-check-label me-3">
        {label}
      </label>
          <input
            type="radio"
            id={id}
            name={name}
            defaultValue={defaultValue}
            className="form-check-input"
          />
    </div>
  );
};

export const InputCheckbox = ({ id, label, name, defaultValue, bgColor}) => {
  return (
    <div className="form-check mb-3">
      <label className="form-check-label fw-bold" htmlFor={id}>
       <span className="rounded-5 p-1 text-white fw-bold" style={{backgroundColor: bgColor}}> {label}</span>
      </label>
          <input
            type="checkbox"
            id={id}
            name={name}
            defaultValue={defaultValue}
            className="form-check-input"
          />
</div>
  );
};
