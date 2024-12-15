import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./core/context/CartContext.jsx";
import { FavoritesProvider } from "./core/context/FavoriteContext.jsx";
import AppRoutes from "./core/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>
);
