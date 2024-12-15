import "@fontsource/poppins";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";
import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "20px 40px",
        marginTop: "20px",
        marginBottom: "50px",
        fontFamily: "Poppins",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            About us
          </Typography>
          <Link href="#" color="textSecondary" underline="none" display="block">
            Pickup points
          </Link>
          <Link href="#" color="textSecondary" underline="none" display="block">
            Vacancies
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            For users
          </Typography>
          <Link href="#" color="textSecondary" underline="none" display="block">
            Contact with us
          </Link>
          <Link href="#" color="textSecondary" underline="none" display="block">
            Answer - Question
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            For entrepreneurs
          </Typography>
          <Link href="#" color="textSecondary" underline="none" display="block">
            Sell in Grape
          </Link>
          <Link href="#" color="textSecondary" underline="none" display="block">
            Seller Login
          </Link>
          <Link href="#" color="textSecondary" underline="none" display="block">
            Open pickup point
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Install app
          </Typography>
          <Link href="#" color="textSecondary" underline="none" display="block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              style={{ width: "120px", marginRight: "10px" }}
            />
          </Link>
          <Link href="#" color="textSecondary" underline="none" display="block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ width: "120px" }}
            />
          </Link>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Grape in social medias
          </Typography>
          <Box sx={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <Instagram sx={{ color: "#E1306C", fontSize: "32px", cursor: "pointer" }} />
            <Telegram sx={{ color: "#0088cc", fontSize: "32px", cursor: "pointer" }} />
            <Facebook sx={{ color: "#1877F2", fontSize: "32px", cursor: "pointer" }} />
            <YouTube sx={{ color: "#FF0000", fontSize: "32px", cursor: "pointer" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
