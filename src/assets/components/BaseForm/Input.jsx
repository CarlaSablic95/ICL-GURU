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

export const InputRadio = ({ label, name, type, defaultValue}) => {
  return (
    <div className="mb-3">
      <label htmlFor={`${name}-${defaultValue}`} className="form-check-label me-3">
        {label}
      </label>
          <input
            type={type}
            id={`${name}-${defaultValue}`}
            name={name}
            defaultValue={defaultValue}
            className="form-check-input"
          />
    </div>
  );
};
