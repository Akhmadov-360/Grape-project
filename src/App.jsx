import "@fontsource/poppins";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductDrawer from "./components/ProductDrawer";
import Loading from "./components/loadingAnimation/Loading";
import { useCart } from "./core/context/CartContext";
import { useFavorites } from "./core/context/FavoriteContext";

function App({ searchQuery }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { addToFavorites, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const jsonData = await response.json();
        setData(jsonData.products);
        setFilteredData(jsonData.products);
      } catch (e) {
        setError(e.message || "Error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error {error}</p>;
  }

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {filteredData.map((item) => (
          <Grid item xs={6} sm={6} md={4} lg={2} key={item.id}>
            <Card
              sx={{ maxWidth: 445, borderRadius: "8px", position: "relative" }}
              onClick={() => handleCardClick(item)}
            >
              <CardMedia
                component="img"
                height="240"
                image={item.images[0]}
                alt={item.title}
                sx={{ backgroundColor: "#DCDCDD" }}
              />

              <IconButton
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  color: isFavorite(item.id) ? "red" : "gray",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  addToFavorites(item);
                }}
              >
                <FavoriteIcon />
              </IconButton>

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

                <Box sx={{ position: "absolute", right: "10px", bottom: "10px" }}>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item);
                    }}
                  >
                    <ShoppingCartIcon sx={{ color: "#4CAF50" }} />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Компонент ProductDrawer */}
      <ProductDrawer isOpen={isDrawerOpen} product={selectedProduct} onClose={handleCloseDrawer} />
    </>
  );
}

export default App;
