import React from "react";
import { Container } from "react-bootstrap";
import Login from "./Pages/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";
import Forgotpassword from "./Pages/Forgotpassword";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Resetpassword from "./Pages/Resetpassword";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <div>
        <ToastContainer></ToastContainer>
      </div>
      <div>
        <Container className="main_container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<Forgotpassword />} />
              <Route path="/landingpage" element={<Landing />} />
              <Route path="/resetpassword/:str" element={<Resetpassword />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
};

export default App;