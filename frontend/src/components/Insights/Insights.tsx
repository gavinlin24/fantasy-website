import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { LoadingState } from "../States/LoadingState";
import { ErrorState } from "../States/ErrorState";
import { fetchSuggestions } from "../../api/api";
import TeamList from "./TeamList";
import TeamDetails from "./TeamDetails";
import TeamRoster from "./TeamRoster";

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

const Insights = () => {
  const [teams, setTeams] = useState<TeamInsight[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<TeamInsight | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSuggestions();
        setTeams(data);
        setSelectedTeam(data[0]);
      } catch {
        setError("Failed to load team insights");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "black",
        p: 6,
      }}
    >
      <Box maxWidth="lg" mx="auto">
        <Typography variant="h4" color="white" fontWeight="bold" gutterBottom>
          Team Insights
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box flex={1}>
            <TeamList
              teams={teams}
              selectedTeam={selectedTeam}
              onSelect={setSelectedTeam}
            />
          </Box>

          {selectedTeam && (
            <Box flex={2} display="flex" flexDirection="column" gap={3}>
              <TeamDetails team={selectedTeam} />
              <TeamRoster roster={selectedTeam.roster} />
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Insights;
