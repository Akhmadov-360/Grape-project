import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../core/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ width: "100%", textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
          Your cart is empty.
        </Typography>
      ) : (
        cart.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                display: "flex",
                borderRadius: "8px",
                position: "relative",
                height: 150,
                maxWidth: 345,
                boxSizing: "border-box",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.images[0]}
                alt={item.title}
                sx={{ width: "120px", objectFit: "contain" }}
              />
              <CardContent
                sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
              >
                <Box>
                  <Typography variant="h6" noWrap>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    Brand: {item.brand}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${item.price}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px", marginBottom: "15px" }}
                >
                  <IconButton onClick={() => decreaseQuantity(item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={() => increaseQuantity(item.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
      {cart.length > 0 && (
        <Box sx={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
          <Button variant="contained" color="primary" sx={{ padding: "10px 20px" }}>
            Перейти к оформлению
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default Cart;
