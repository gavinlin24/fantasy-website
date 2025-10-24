import { Box, Typography, Stack, Chip } from "@mui/material";

interface Player {
  name: string;
  position: string;
  team: string;
  injured: boolean;
  total_points: number;
  avg_points: number;
}

interface TeamRosterProps {
  roster: Player[];
}

const TeamRoster = ({ roster }: TeamRosterProps) => {
  if (!roster || roster.length === 0) {
    return (
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: "white",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" color="black" fontWeight="bold" gutterBottom>
          Current Roster
        </Typography>
        <Typography color="text.secondary">No players in roster</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: "white",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h6" color="black" fontWeight="bold" gutterBottom>
        Current Roster
      </Typography>
      <Stack spacing={2}>
        {roster.map((player, idx) => (
          <Box
            key={idx}
            sx={{
              p: 2,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Box>
              <Typography color="black" fontWeight="medium">
                {player.name}{" "}
                {player.injured && (
                  <Chip
                    label="INJURED"
                    color="error"
                    size="small"
                    sx={{ ml: 1 }}
                  />
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {player.position} • {player.team}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography color="black" fontWeight="bold">
                {player.avg_points.toFixed(1)} PPG
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {player.total_points} Total
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default TeamRoster;
