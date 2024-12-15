import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";

const ProductDrawer = ({ isOpen, product, onClose }) => {
  if (!product) return null;

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={onClose}>
      <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <IconButton onClick={onClose} sx={{ alignSelf: "flex-end" }}>
          <CloseIcon />
        </IconButton>

        {/* Изображение товара */}
        <CardMedia
          component="img"
          image={product.images[0]}
          alt={product.title}
          sx={{
            maxWidth: "100%",
            maxHeight: 300,
            objectFit: "contain",
            margin: "0 auto",
            borderRadius: 2,
            backgroundColor: "#f5f5f5",
          }}
        />

        {/* Основная информация */}
        <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 1 }}>
          {product.title}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price} {product.discountPercentage && `(-${product.discountPercentage}%)`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Рейтинг: {product.rating} / 5
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {product.description}
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        {/* Дополнительная информация */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Extra information
          </Typography>
          <Typography variant="body1">Warranty: {product.warrantyInformation || "Не указано"}</Typography>
          <Typography variant="body1">Return policy: {product.returnPolicy || "Не указано"}</Typography>
        </Box>

        <Divider sx={{ marginY: 2 }} />

        {/* Комментарии пользователей */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Users Reviews
          </Typography>
          <List>
            {product.reviews?.length > 0 ? (
              product.reviews.map((review, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt={review.reviewerName}
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.reviewerName)}`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${review.reviewerName} — Rating: ${review.rating} / 5`}
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {review.comment}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {review.reviewerEmail}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                No reviews yet.
              </Typography>
            )}
          </List>
        </Box>

        <Divider sx={{ marginY: 2 }} />

        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Drawer>
  );
};

export default ProductDrawer;
