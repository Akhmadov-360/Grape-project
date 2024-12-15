import { keyframes } from "@emotion/react";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const loadingAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Loading = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress />
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          animation: `${loadingAnimation} 1s infinite`,
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
