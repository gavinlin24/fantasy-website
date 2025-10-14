import { useEffect, useState } from "react";
import { fetchTeamLeaderboard, fetchPlayerLeaderboard } from "../../api/api";
import { Box, Typography } from "@mui/material";
import PodiumItem from "./PodiumItem";
import LeaderboardTable from "./LeaderboardTable";

interface Team {
  team_name: string;
  standing: number;
  logo: string;
  wins: number;
  losses: number;
  points_for: number;
  points_against: number;
}

interface Player {
  player_name: string;
  team: string;
  fantasy_points: number;
}

export default function Leaderboard() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchTeamLeaderboard().then(setTeams);
    fetchPlayerLeaderboard().then(setPlayers);
  }, []);

  const handleImageError = (name: string) => {
    setImageErrors((prev) => new Set(prev).add(name));
  };

  const topThreeTeams = teams.slice(0, 3);
  const topThreePlayers = players.slice(0, 3);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "black",
        py: 6,
        px: { xs: 2, sm: 4 },
        overflowX: "hidden",
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Team Leaderboard */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "white", textAlign: "center", mb: 6 }}
          >
            Top Teams
          </Typography>

          {/* Top 3 Podium */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 3,
              mb: 6,
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            {topThreeTeams.map((team) => (
              <PodiumItem
                key={team.team_name}
                name={team.team_name}
                subtitle={`${team.wins}W - ${team.losses}L`}
                rank={team.standing}
                logo={team.logo}
                isTeam={true}
                onImageError={handleImageError}
                imageError={imageErrors.has(team.team_name)}
              />
            ))}
          </Box>

          {/* All Teams Table */}
          <LeaderboardTable
            data={teams}
            type="team"
            imageErrors={imageErrors}
            onImageError={handleImageError}
          />
        </Box>

        {/* Player Leaderboard */}
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "white", textAlign: "center", mb: 6 }}
          >
            Top Performers
          </Typography>

          {/* Top 3 Podium */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 3,
              mb: 6,
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            {topThreePlayers.map((player, index) => (
              <PodiumItem
                key={player.player_name}
                name={player.player_name}
                subtitle={player.team}
                rank={index + 1}
                isTeam={false}
                onImageError={handleImageError}
                imageError={false}
              />
            ))}
          </Box>

          {/* All Players Table */}
          <LeaderboardTable
            data={players}
            type="player"
            imageErrors={imageErrors}
            onImageError={handleImageError}
          />
        </Box>
      </Box>
    </Box>
  );
}
