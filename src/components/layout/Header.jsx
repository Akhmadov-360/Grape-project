import "@fontsource/poppins";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Link as MuiLink, TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartBadge from "../CartBadge";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "space-around",
        height: "60px",
        padding: "0 10px",
      }}
    >
      {/* Лого - скрывается на мобильных */}
      {!isMobile && (
        <Box>
          <MuiLink
            component={Link}
            to="/"
            underline="none"
            sx={{
              color: "#7000FF",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "27px",
              fontFamily: "Poppins",
            }}
          >
            Grape
          </MuiLink>
        </Box>
      )}

      {/* Поле поиска */}
      <Box
        sx={{
          flexGrow: isMobile ? 1 : 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          label="Search products"
          variant="outlined"
          size="small"
          fullWidth={isMobile}
          sx={{ marginRight: "8px", maxWidth: isMobile ? "100%" : "400px" }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7000FF",
            height: "40px",
            color: "#FFF",
            "&:hover": { backgroundColor: "#5A00CC" },
          }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </Box>

      {/* Кнопки навигации - скрываются на мобильных */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {/* Избранные */}
          <Button
            sx={{ height: "42px", color: "#1F2026" }}
            variant="text"
            startIcon={<FavoriteBorderIcon />}
            onClick={() => navigate("/favorites")}
          >
            Favourites
          </Button>

          {/* Корзина */}
          <Button
            sx={{ height: "42px", color: "#1F2026" }}
            variant="text"
            startIcon={<CartBadge />}
            onClick={() => navigate("/cart")}
          >
            Cart
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Header;
