import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import { Toaster } from "react-hot-toast";
import RecipeInfo from "./pages/recipesInfo/RecipeInfo";
import ProductDetails from "./pages/productDetails/ProductDetails";
import UserDetails from "./pages/userDetails/UserDetails";
import PostDetails from "./pages/postDeatils/PostDetails";
import Dashboard from "./pages/dashboard/Dashboard";
import Teachers from "./pages/dashboard/teachers/Teachers";
import Students from "./pages/dashboard/students/Students";
import Group from "./pages/dashboard/group/Group";
import Profile from "./pages/dashboard/profile/Profile";
import Statistics from "./pages/dashboard/statistics/Statistics";
import Group1 from "./pages/dashboard/group/group1/Group1";
import Group2 from "./pages/dashboard/group/group2/Group2";
import Group3 from "./pages/dashboard/group/group3/Group3";
import Teachers2 from "./pages/dashboard/teachers/teachers2/Teachers2";
import Teachers1 from "./pages/dashboard/teachers/teachers1/Teachers1";
import Students1 from "./pages/dashboard/students/students1/Students1";
import Students2 from "./pages/dashboard/students/students2/Students2";
import Student3 from "./pages/dashboard/students/students3/Student3";
import Student4 from "./pages/dashboard/students/student4/Student4";
import Students5 from "./pages/dashboard/students/students5/Students5";

const App = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/recipeInfo/:id" element={<RecipeInfo />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/userDetails/:id" element={<UserDetails />} />
          <Route path="/postDetails/:id" element={<PostDetails />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Group />}>
            <Route path="" element={<Group1 />} />
            <Route path="group2" element={<Group2 />} />
            <Route path="group3" element={<Group3 />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="teachers" element={<Teachers />}>
            <Route path="" element={<Teachers1 />} />
            <Route path="teachers2" element={<Teachers2 />} />
          </Route>
          <Route path="students" element={<Students />}>
            <Route path="" element={<Students1 />} />
            <Route path="student2" element={<Students2 />} />
            <Route path="student3" element={<Student3 />} />
            <Route path="student4" element={<Student4 />} />
            <Route path="student5" element={<Students5 />} />
          </Route>
          <Route path="statistics" element={<Statistics />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
