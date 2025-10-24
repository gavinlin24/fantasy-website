import { Paper, Stack, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 4,
      }}
    >
      <Stack direction="row" spacing={3} alignItems="center">
        <Box>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            League News
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Header;
