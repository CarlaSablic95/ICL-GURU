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
    <div className="form-check">
      <label className="form-check-label fw-bold" htmlFor={id}>
       <span className="rounded-5 p-1 text-white fw-bold" style={{backgroundColor: bgColor}}> {label}</span>
      </label>
          <input
            type="checkbox"
            id={id}
            name={name}
            defaultValue={defaultValue}
            className="form-check-input pe-0"
          />
</div>
  );
};
