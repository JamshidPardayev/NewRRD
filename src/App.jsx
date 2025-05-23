import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Layout from "./pages/layout/Layout";
import { Toaster } from "react-hot-toast";
import RecipeInfo from "./pages/recipesInfo/RecipeInfo";

const App = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="/recipeInfo/:id" element={<RecipeInfo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
