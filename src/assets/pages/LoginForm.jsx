import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import EyeOff from "/icons/eye-slash.svg";
import EyeOn from "/icons/eye.svg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { username, password } = data;
        console.log("Username:", username);
        console.log("Password:", password);
  };

  const isFormInvalid = !!errors.username || !!errors.password;

  return (
      <section className="bg-login d-flex  align-items-center">
        <div className="container">
            <div className="row justify-content-center form-login">
                <div className="col-10 col-md-5 bg-fondo d-none d-md-block"></div>
                    <div className="col-10 col-md-5 px-5 px-md-4 bg-form d-flex flex-column justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="px-3 px-md-5">
                            <h1 className="text-uppercase text-center py-4 text-white">Icl Guru</h1>
                        <div className="form-floating mb-4 text-center">
                            <input
                            {...register("username", { required: true })}
                            placeholder="Username"
                            className={`form-control rounded-5 ${errors.username ? "border border-2 border-danger" : ""} `}
                            id="username"
                            type="text"
                            />
                            {errors.username && (
                            <small className="text-danger fw-bold">This field is required</small>
                            )}
                            <label htmlFor="username">Username</label>
                        </div>

                        <div className="form-floating mb-3 text-center">
                            <span
                            className="position-absolute eye-icon"
                            onClick={handleShowPassword}
                            >
                            <img src={showPassword ? EyeOn : EyeOff} alt="ícono de ojo" />
                            </span>
                            <input
                            {...register("password", { required: true, minLength: 8, maxLength: 8 })}
                            placeholder="Password"
                            className={`form-control rounded-5 ${errors.password ? "border border-2 border-danger" : ""} `}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            />

                            {errors.password && (
                            <small className="text-danger fw-bold">
                                { errors.password.type === "required" && "This field is required"}
                                { errors.password.type === "minLength" && "Must be at least 8 characters"}
                                { errors.password.type === "maxLength" && "Must be 8 characters"}
                            </small>
                            )}
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button title="Login" type="submit" bgColor="#00507C" textColor="#fefefe" textTransform="uppercase" rounded="3rem" width="220px" height="50px" disabled={ !isFormInvalid } />
                        </div>

                        <p className="text-center py-3"><a href="#" className="text-white text-decoration-none">I forgot my password</a></p>
                        </form>
                    </div>
                </div>
        </div>
      </section>
  );
};

export default LoginForm;
