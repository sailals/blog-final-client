import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signin from "./Pages/SignIn/Signin";
import "./app.css";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Login from "./Pages/Login/Login";
import Write from "./Pages/Write/Write";
import { Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Footer from "./Components/Footer/Footer";
function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Navbar />
      {/* <Signin /> */}
      {/* <Single /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Write /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={user ? Home : Login} />
        <Route path="/signin" component={user ? Home : Signin} />
        <Route path="/post/:postid" component={Single} />
        <Route path="/write" component={user ? Write : Signin} />
      </Switch>
    </>
  );
}

export default App;
