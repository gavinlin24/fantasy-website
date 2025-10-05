import { Box, Typography, Avatar } from "@mui/material";

interface PodiumItemProps {
  name: string;
  subtitle: string;
  rank: number;
  logo?: string;
  isTeam: boolean;
  onImageError: (name: string) => void;
  imageError: boolean;
}

export default function PodiumItem({
  name,
  subtitle,
  rank,
  logo,
  isTeam,
  onImageError,
  imageError,
}: PodiumItemProps) {
  const getRankColor = (rank: number) => {
    if (rank === 1) return "#FFD700";
    if (rank === 2) return "#C0C0C0";
    if (rank === 3) return "#CD7F32";
    return "#667eea";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        order: rank === 1 ? 2 : rank === 2 ? 1 : 3,
      }}
    >
      {/* Rank Badge */}
      <Box
        sx={{
          position: "absolute",
          top: -10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 40,
          height: 40,
          bgcolor: getRankColor(rank),
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid white",
          boxShadow: 3,
          zIndex: 2,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 900, color: "white" }}>
          {rank}
        </Typography>
      </Box>

      {/* Podium Base */}
      <Box
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: 3,
          p: 3,
          pt: 5,
          minWidth: rank === 1 ? 280 : 240,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          boxShadow: 3,
        }}
      >
        {/* Avatar */}
        {isTeam && logo && !imageError ? (
          <Avatar
            src={logo}
            alt={name}
            sx={{
              width: rank === 1 ? 140 : 120,
              height: rank === 1 ? 140 : 120,
              boxShadow: 3,
            }}
            onError={() => onImageError(name)}
          />
        ) : (
          <Avatar
            sx={{
              width: rank === 1 ? 140 : 120,
              height: rank === 1 ? 140 : 120,
              background: isTeam
                ? `linear-gradient(135deg, ${getRankColor(
                    rank
                  )} 0%, ${getRankColor(rank)}AA 100%)`
                : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              fontSize: rank === 1 ? 56 : 48,
              fontWeight: 700,
              boxShadow: 3,
            }}
          >
            {name.charAt(0).toUpperCase()}
          </Avatar>
        )}

        {/* Name */}
        <Box>
          <Typography
            variant={rank === 1 ? "h6" : "body1"}
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 0.5,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
