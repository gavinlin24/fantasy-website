import { Paper, Typography } from "@mui/material";

const Empty = () => {
  return (
    <Paper elevation={3} sx={{ p: 8, textAlign: "center", borderRadius: 4 }}>
      <Typography variant="h4" gutterBottom>
        📭
      </Typography>
      <Typography variant="h6" color="text.secondary">
        No recent activity
      </Typography>
    </Paper>
  );
};

export default Empty;
