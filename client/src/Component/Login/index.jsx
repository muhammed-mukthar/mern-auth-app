import { Link } from "react-router-dom";
import styles from "./styles.modules.css";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [data, setData] = useState({
 
    email: "",
    password: "",
  });
  const [error,setError]=useState('')

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token",res.data)
      window.location='/'
      
      
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}></div>
      <div className={styles.left}>
      <form onSubmit={handleSubmit} className={styles.form_container}>
          <h1>Login to your Account</h1>
        
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
            Sign In
          </button>
        </form>
      </div>
      <div className={styles.right}>
      <h1>new Here</h1>
        <Link to="/signup">
          <button type="button" className={styles.white_btn}>Signup</button>
        </Link>
      
      </div>
    </div>
  );
};
