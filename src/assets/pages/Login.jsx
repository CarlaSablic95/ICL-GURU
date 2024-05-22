import { useFormik } from "formik";
import Button from "../components/Button/Button";


const Login = () => {
    const validate = values => {
        const errors = {};

        if(!values.username) {
            errors.username = "This field is required";
        }

        if(!values.email) {
            errors.email = "This field is required";
        } else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if(!values.password) {
            errors.password = "This field is required";
        } else if(values.password.length < 8) {
            errors.password = "Must be 8 characters";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },

        validate,

        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });

    return (
        <main>
            <section>
                <h1 className="text-uppercase">Icl Guru</h1>
                <form onSubmit={ formik.handleSubmit }>
                    <div className="form-floating mb-3">
                    <input 
                        id="username"
                        name="username"
                        type="text"
                        className="form-control rounded-5"
                        onChange={ formik.handleChange }
                        value={ formik.values.username }
                        placeholder="Username"
                        />
                        { formik.errors.username ? <small className="text-danger">{ formik.errors.username }</small>  : null }
                    <label htmlFor="username">Username</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        className="form-control rounded-5"
                        onChange={ formik.handleChange }
                        value={ formik.values.email }
                        placeholder="Email"
                        />
                        { formik.errors.email ? <small className="text-danger">{ formik.errors.email }</small> : null }
                  <label htmlFor="email">Email</label>
                  </div>

                  <div className="form-floating mb-3">
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            className="form-control rounded-5"
                            onChange={ formik.handleChange }
                            value={ formik.values.password }
                            placeholder="Password"
                        />
                        
                        { formik.errors.password ? <small className="text-danger">{ formik.errors.password }</small> : null }

                    <label htmlFor="password">Password</label>
                    </div>

                        <div className="">
                            <Button type="submit" name="Login" />
                        </div>
                            <a href="/">I forgot my password</a>
                </form>
            </section>
        </main>
    )
}

export default Login;