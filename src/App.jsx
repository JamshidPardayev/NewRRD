import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
