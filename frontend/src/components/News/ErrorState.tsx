import { Box, Paper, Alert, Button } from "@mui/material";

export function ErrorState({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
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
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
        <Button fullWidth variant="contained" onClick={onRetry} size="large">
          Retry
        </Button>
      </Paper>
    </Box>
  );
}
