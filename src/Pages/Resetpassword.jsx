import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resetpassword = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { str } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`https://resetpassword-xpk9.onrender.com/api/user/checkstring/${str}`);
      setData(response.data.result);
      setUsername(response.data.result.username);
      setEmail(response.data.result.email);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password };

    try {
      const response = await axios.put("https://resetpassword-xpk9.onrender.com/api/user/reset-password", payload);
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <section className="centre_container opacity-75">
        <div className="login_container">
          <h1>Reset password</h1>
          <form onSubmit={handleSubmit}>
            <div className="input_container ri-user-fill">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                value={data.username}
                readOnly
              />
            </div>
            <div className="input_container ri-mail-fill">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={data.email}
                readOnly
              />
            </div>
            <div className="input_container ri-lock-password-fill">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit">Reset password</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Resetpassword;