import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartBadge from "../CartBadge";

const ResponsiveFooter = () => {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <BottomNavigationAction label="Main" icon={<HomeIcon />} component={Link} to="/" sx={{ flex: "1" }} />
        <BottomNavigationAction label="Cart" icon={<CartBadge />} component={Link} to="/cart" sx={{ flex: "1" }} />
        <BottomNavigationAction
          label="Favorite"
          icon={<FavoriteIcon />}
          component={Link}
          to="/favorites"
          sx={{ flex: "1" }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default ResponsiveFooter;
