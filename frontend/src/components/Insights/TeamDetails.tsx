import { Box, Typography, Chip, Stack } from "@mui/material";

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

interface TeamDetailsProps {
  team: TeamInsight;
}

const TeamDetails = ({ team }: TeamDetailsProps) => {
  const getChipColor = (actionType: string) => {
    const action = actionType.toUpperCase();
    if (action.includes("DROP")) {
      return "warning";
    } else if (action === "TRADE") {
      return "info";
    } else if (action === "HOLD") {
      return "success";
    }
    return "default";
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: "white",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Typography variant="h5" color="black" fontWeight="bold">
          {team.team}
        </Typography>
        <Chip label={team.action_type} color={getChipColor(team.action_type)} />
      </Stack>
      <Box sx={{ mb: 2 }}>
        <Typography color="text.secondary" fontSize={14} fontWeight="bold">
          Recommendation
        </Typography>
        <Typography color="black" fontSize={16}>
          {team.suggestion}
        </Typography>
      </Box>
      <Box>
        <Typography color="text.secondary" fontSize={14} fontWeight="bold">
          Analysis
        </Typography>
        <Typography color="black" fontSize={16}>
          {team.reasoning}
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamDetails;
