import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import AddStocks from "./pages/AddStocks";
import StockDetail from "./pages/StockDetail";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import fire from "./firebase";
import Login from "./components/Login";
import Hero from "./components/Hero";
import API from "./utils/API";
import LoginRequest from "./components/LoginRequest";
import { AnimatePresence } from "framer-motion";

function App() {
  //User Authentication
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError("Incorrect email or password");
            break;
          case "auth/wrong-password":
            setPasswordError("Incorrect email or password");
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const location = useLocation();

  // API STUFF

  const [stocks, setStocks] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    units: 0,
  });

  // //Load all stocks and store them with setStocks
  // useEffect(() => {
  //   loadStocks();
  // }, []);

  // // load all stocks and set them to stocks
  // function loadStocks() {
  //   API.getStocks()
  //     .then((res) => setStocks(res.data))
  //     .catch((err) => console.log(err));
  // }

  // function deleteStock(id) {
  //   API.deleteStock(id)
  //     .then((res) => loadStocks())
  //     .catch((err) => console.log(err));
  // }

  // //Updates component state when user types in the input.
  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   if (formObject.name && formObject.units) {
  //     API.saveStock({
  //       name: formObject.name,
  //       units: formObject.units,
  //     })
  //       .then(() =>
  //         setFormObject({
  //           name: "",
  //           units: 0,
  //         })
  //       )
  //       .then(() => loadStocks())
  //       .catch((err) => console.log(err));
  //   }
  // }

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            {user ? <Home /> : <LoginRequest />}
          </Route>
          <Route path="/markets" exact>
            {user ? <Markets /> : <LoginRequest />}
          </Route>
          <Route path="/addstocks">
            {user ? (
              <AddStocks
                stocks={stocks}
                setStocks={setStocks}
                formObject={formObject}
                setFormObject={setFormObject}
              />
            ) : (
              <LoginRequest />
            )}
          </Route>
          <Route path="/login">
            {user ? (
              <Hero handleLogout={handleLogout} />
            ) : (
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
              />
            )}
          </Route>
          <Route path="/:id">
            <StockDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
