import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.modules.css";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error,setError]=useState('')
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  };
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}></div>
      <div className={styles.left}>
        <h1>Welcome Back</h1>
        <Link to="/login">
          <button type="button" className={styles.white_btn}>Signin</button>
        </Link>
      </div>
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.form_container}>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            onChange={handleChange}
            className={styles.input}
            value={data.firstName}
            required
          />
          <input
            type="text"
            placeholder="last name"
            name="lastname"
            onChange={handleChange}
            className={styles.input}
            value={data.lastName}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            className={styles.input}
            value={data.email}
          />
          <input
            type="password"
            placeholder="password "
            name="password"
            onChange={handleChange}
            className={styles.input}
            value={data.password}
          />
          {error && <div className={styles.error_msg}>{error}</div>}
          <button type="submit" className={styles.green_btn}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
