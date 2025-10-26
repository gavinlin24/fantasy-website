import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1a1a1a" }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: "white",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Fantasy Insights
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            color="inherit"
            onClick={() => navigate("/leaderboard")}
            sx={{
              fontWeight: isActive("/leaderboard") ? 700 : 400,
              bgcolor: isActive("/leaderboard")
                ? "rgba(102, 126, 234, 0.2)"
                : "transparent",
              "&:hover": {
                bgcolor: "rgba(102, 126, 234, 0.3)",
              },
            }}
          >
            Leaderboard
          </Button>

          <Button
            color="inherit"
            onClick={() => navigate("/news")}
            sx={{
              fontWeight: isActive("/news") ? 700 : 400,
              bgcolor: isActive("/news")
                ? "rgba(102, 126, 234, 0.2)"
                : "transparent",
              "&:hover": {
                bgcolor: "rgba(102, 126, 234, 0.3)",
              },
            }}
          >
            News
          </Button>

          <Button
            color="inherit"
            onClick={() => navigate("/insights")}
            sx={{
              fontWeight: isActive("/insights") ? 700 : 400,
              bgcolor: isActive("/insights")
                ? "rgba(102, 126, 234, 0.2)"
                : "transparent",
              "&:hover": {
                bgcolor: "rgba(102, 126, 234, 0.3)",
              },
            }}
          >
            Insights
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
