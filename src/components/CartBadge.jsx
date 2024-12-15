import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import React from "react";
import { useCart } from "../core/context/CartContext";

const CartBadge = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <IconButton color="inherit">
      <Badge badgeContent={totalItems} color="error" max={99}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartBadge;
