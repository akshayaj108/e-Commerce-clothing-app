import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Auth from "./routes/authentication/authentication.component.jsx";

const Shop = () => {
  return <h1>Hi, I'm shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
