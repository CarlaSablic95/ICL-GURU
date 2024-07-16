import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import EyeOff from "/icons/eye-slash.svg";
import EyeOn from "/icons/eye.svg";

const Login = () => {
    const { login } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMessage("");

        try {
           await login(data);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-login d-flex align-items-center">
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
                                    className={`form-control rounded-5 ${errors.username ? "border border-2 border-danger" : ""}`}
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
                                    {...register("password", { required: true })}
                                    placeholder="Password"
                                    className={`form-control rounded-5 ${errors.password ? "border border-2 border-danger" : ""}`}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                />
                                {errors.password && (
                                    <small className="text-danger fw-bold">
                                        {errors.password.type === "required" && "This field is required"}
                                    </small>
                                )}
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn py-2 px-4 border-0 fw-bold"
                                    style={{ backgroundColor: "#00507C", color: "#fefefe", textTransform: "uppercase", borderRadius: "3rem", width: "220px", height: "50px" }}
                                    disabled={loading}
                                >
                                    {loading ? (<div className="d-flex justify-content-center align-items-center"><span className="me-1">Loading</span> <span className="loader"></span></div>) : "Login"}
                                </button>
                            </div>
                            {errorMessage && (
                                <div className="text-center py-2">
                                    <small className="text-danger fw-bold mt-3">
                                        {errorMessage}
                                    </small>
                                </div>
                            )}
                            <p className="text-center py-3"><a href="#" className="text-white text-decoration-none">I forgot my password</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
