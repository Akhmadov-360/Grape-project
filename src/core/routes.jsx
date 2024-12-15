import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/index";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";

const AppRoutes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout onSearch={setSearchQuery}>
            <App searchQuery={searchQuery} />
          </Layout>
        }
      />
      <Route
        path="/favorites"
        element={
          <Layout>
            <Favorites />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
