import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1a1a",
        color: "white",
        py: 3,
        px: 2,
        mt: "auto",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Left side - Name and copyright */}
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          © {new Date().getFullYear()} Gavin Lin. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link
            href="https://github.com/yourusername/fantasy-insights"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              transition: "color 0.2s",
              "&:hover": {
                color: "#667eea",
              },
            }}
          >
            <GitHubIcon fontSize="small" />
            <Typography variant="body2">View Source</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
