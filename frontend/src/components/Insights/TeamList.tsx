import { Box, Typography, Stack, Button } from "@mui/material";

interface Player {
  name: string;
  position: string;
  team: string;
  injured: boolean;
  total_points: number;
  avg_points: number;
}

interface TeamInsight {
  team: string;
  action_type: string;
  suggestion: string;
  reasoning: string;
  roster: Player[];
}

interface TeamListProps {
  teams: TeamInsight[];
  selectedTeam: TeamInsight | null;
  onSelect: (team: TeamInsight) => void;
}

export default function TeamList({
  teams,
  selectedTeam,
  onSelect,
}: TeamListProps) {
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
        Teams
      </Typography>
      <Stack spacing={2}>
        {teams.map((team, idx) => (
          <Button
            key={idx}
            onClick={() => onSelect(team)}
            sx={{
              justifyContent: "space-between",
              borderRadius: 3,
              bgcolor:
                selectedTeam?.team === team.team
                  ? "primary.main"
                  : "rgba(0,0,0,0.05)",
              color: selectedTeam?.team === team.team ? "white" : "black",
              "&:hover": {
                bgcolor:
                  selectedTeam?.team === team.team
                    ? "primary.dark"
                    : "rgba(0,0,0,0.1)",
              },
            }}
          >
            <Typography variant="body1" sx={{ textTransform: "none" }}>
              {team.team}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
