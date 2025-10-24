import { Box, Paper, CircularProgress, Typography } from "@mui/material";

const LoadingState = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <CircularProgress size={60} thickness={4} />
        <Typography variant="h6" sx={{ mt: 3, color: "text.secondary" }}>
          Loading...
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoadingState;
