import { Box, Paper, Alert } from "@mui/material";

const ErrorState = ({ error }: { error: string }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, borderRadius: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Paper>
    </Box>
  );
};

export default ErrorState;
