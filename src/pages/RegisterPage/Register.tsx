import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import user1 from "../../assets/img/userImages/soner.jpg";
import user2 from "../../assets/img/userImages/yagmur.jpg";
import user3 from "../../assets/img/userImages/seyhmus.jpeg";
import user4 from "../../assets/img/userImages/feyza.jpeg";
import "./register.css";
import { useAuth } from "../../contexts/AuthContext";
import AuthService from "../../services/authService/AuthService";
import { number, object, string } from "yup";
import Field from '../../components/FormikInput/FormikInput';
import { TokenResponse } from "../../models/responses/auth/LoginResponse";
import { toast } from 'react-toastify';



type Props = {
  name?: string;
  type?: string;
  placeHolder?: string;
};

const Register: React.FC<Props> = (props: Props) => {
  const authContext: any = useAuth();
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();



  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };


  const signupValidationSchema = object({
    firstName: string()
      .required("First Name field is required.")
      .min(2, "First Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.'),
    lastName: string()
      .required("Last Name field is required.")
      .min(2, "Last Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.')
    ,

    phoneNumber: string().required("Phone number is required.")
      .matches(
        /^05\d{9}$/,
        "Phone number must be in the format 05xxxxxxxxx."
      ),
    email: string()
      .required("Email field is required.")
      .email("Invalid email format."),
    password: string().required("Password field is required.")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "Password must include at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
      .matches(/\d/, "Password must include at least one number.")
      .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, "Password must include at least one punctuation mark."),
  });


  const signInValidationSchema = object({
    email: string()
      .required("Email field is required.")
      .email("Invalid email format."),
    password: string()
      .required("Password field is required.")
  });




  const signInhandleSubmit = async (values: any) => {

    const authService = new AuthService();
    const response = await authService.signIn(values)
      .then((res) => {
        localStorage.setItem("token", res?.data?.token);
        authContext.refreshUser();
        navigate("/");
        console.log("Success", res)
      }
      )
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error(`Hatalı Giris : ${error.response.data.message}`);
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("No response from server. Please try again later.");
        } else {
          // Something happened in setting up the request that triggered an Error
          toast.error("An error occurred while making the request: " + error.message);
        }
      });

    
  };

    /// Sign Up api istek fonksiyonu
  const handleSubmit = async (values: any) => {

    const authService = new AuthService();
    const response = await authService.signUp(values)
      .then(res => {
        console.log("Success", res)
        navigate('/')
      }
      )
      .catch((err) => { console.log(err) }
      )

    
  };



  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  return (
    <div className={`register ${isActive ? "active" : ""}`} ref={containerRef}>

      <div className={`containers ${isActive ? "active" : ""}`}>
        <div
          className={`form-containers sign-up ${isActive ? "active" : ""}`}
        > <Formik initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signupValidationSchema}
          validateOnBlur={true}
          validateOnChange={true}>
            <Form className="form">
              <h1>Create Account</h1>
              <div className="social-icons">
                <Link to="https://github.com/sonersyln" className="icon">
                  <img src={user1} alt="user" />
                </Link>
                <Link to="https://github.com/yagmurcurku" className="icon">
                  <img src={user2} alt="user" />
                </Link>
                <Link to="https://github.com/shmserl" className="icon">
                  <img src={user3} alt="user" />
                </Link>
                <Link to="https://github.com/feyzaerat" className="icon">
                  <img src={user4} alt="user" />
                </Link>
              </div>
              <span>or use your email for registration</span>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <Field
                    name="firstName"
                    className="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <Field
                    name="lastName"
                    className="input"
                    type="text"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <Field
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Email"

                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <Field
                    name="phoneNumber"
                    className="input"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <Field
                name="password"
                className="input"
                type="password"
                placeholder="Password"

              />

              <button className="btn" type="submit">
                Sign Up
              </button>
            </Form>
          </Formik>
        </div>



        <div
          className={`form-containers sign-in ${isActive ? "active" : ""}`}
        >
          <Formik initialValues={initialValues}
            onSubmit={signInhandleSubmit}
            validationSchema={signInValidationSchema}
            validateOnBlur={true}
            validateOnChange={false}>
            <Form className="form" action="">
              <h1>Sign In</h1>
              <div className="social-icons">
                <Link to="https://github.com/sonersyln" className="icon">
                  <img src={user1} alt="user" />
                </Link>
                <Link to="https://github.com/yagmurcurku" className="icon">
                  <img src={user2} alt="user" />
                </Link>
                <Link to="https://github.com/shmserl" className="icon">
                  <img src={user3} alt="user" />
                </Link>
                <Link to="https://github.com/feyzaerat" className="icon">
                  <img src={user4} alt="user" />
                </Link>
              </div>
              <span>or use your email password</span>
              <Field
                name="email"
                className="input"
                type="email"
                placeholder="Email"
              />
              <Field
                name="password"
                className="input"
                type="password"
                placeholder="Password"
              />
              <Link to="#">Forget Your Password?</Link>
              <button className="btn" type="submit"

                

                
              >
                Sign In
              </button>
            </Form>
          </Formik>
        </div>
        <div className="toggle-containers">
          <div className={`toggle ${isActive ? "active" : ""}`}>
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button
                id="login"
                className={isActive ? "toggle-btn active" : "toggle-btn"}
                onClick={handleClick}
              >
                Sign In
              </button>
            </div>
            <div
              className={`toggle-panel toggle-right ${isActive ? "active" : ""
                }`}
            >
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button
                id="register"
                className={!isActive ? "toggle-btn active" : "toggle-btn"}
                onClick={handleClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;