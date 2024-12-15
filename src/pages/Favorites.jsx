import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../core/context/CartContext";
import { useFavorites } from "../core/context/FavoriteContext";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {favorites.length === 0 ? (
        <Typography variant="h6" sx={{ width: "100%", textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
          Add what you like.
        </Typography>
      ) : (
        favorites.map((item) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={item.id}>
            <Card sx={{ maxWidth: 445, borderRadius: "8px", position: "relative" }}>
              <CardMedia
                component="img"
                height="240"
                image={item.images[0]}
                alt={item.title}
                sx={{ backgroundColor: "#DCDCDD" }}
              />
              <CardContent>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  component="div"
                  noWrap
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <StarIcon sx={{ color: "#FFB54C" }} fontSize="small" /> {item.rating} / 5
                </Typography>
                <Typography variant="h6" color="primary">
                  ${item.price}
                </Typography>

                <Box sx={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
                  <IconButton onClick={() => removeFromFavorites(item.id)}>
                    <FavoriteIcon sx={{ color: "red" }} />
                  </IconButton>

                  <IconButton onClick={() => addToCart(item)}>
                    <ShoppingCartIcon sx={{ color: "#4CAF50" }} />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Favorites;
