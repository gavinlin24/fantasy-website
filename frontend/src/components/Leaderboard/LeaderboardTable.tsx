import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Stack,
  Typography,
  Box,
} from "@mui/material";

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

interface LeaderboardTableProps {
  data: Team[] | Player[];
  type: "team" | "player";
  imageErrors: Set<string>;
  onImageError: (name: string) => void;
}

const LeaderboardTable = ({
  data,
  type,
  imageErrors,
  onImageError,
}: LeaderboardTableProps) => {
  const getRankColor = (rank: number) => {
    if (rank === 1) return "#FFD700";
    if (rank === 2) return "#C0C0C0";
    if (rank === 3) return "#CD7F32";
    return "#667eea";
  };

  const isTeam = type === "team";

  return (
    <TableContainer
      component={Paper}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: 3,
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "rgba(102, 126, 234, 0.1)" }}>
            <TableCell sx={{ fontWeight: 700 }}>Rank</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>
              {isTeam ? "Team" : "Player"}
            </TableCell>
            {isTeam && <TableCell sx={{ fontWeight: 700 }}>Record</TableCell>}
            {!isTeam && <TableCell sx={{ fontWeight: 700 }}>Team</TableCell>}
            {isTeam && (
              <>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  Points For
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  Points Against
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  Differential
                </TableCell>
              </>
            )}
            {!isTeam && (
              <TableCell sx={{ fontWeight: 700 }} align="right">
                Fantasy Points
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            const rank = isTeam ? (item as Team).standing : index + 1;
            const name = isTeam
              ? (item as Team).team_name
              : (item as Player).player_name;

            return (
              <TableRow
                key={name}
                sx={{
                  bgcolor:
                    rank <= 3 ? "rgba(255, 215, 0, 0.05)" : "transparent",
                }}
              >
                <TableCell>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: getRankColor(rank),
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 900, color: "white" }}
                    >
                      {rank}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    {isTeam && (item as Team).logo && !imageErrors.has(name) ? (
                      <Avatar
                        src={(item as Team).logo}
                        alt={name}
                        sx={{ width: 40, height: 40 }}
                        onError={() => onImageError(name)}
                      />
                    ) : (
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          background: isTeam
                            ? `linear-gradient(135deg, ${getRankColor(
                                rank
                              )} 0%, ${getRankColor(rank)}AA 100%)`
                            : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                          fontWeight: 700,
                        }}
                      >
                        {name.charAt(0).toUpperCase()}
                      </Avatar>
                    )}
                    <Typography variant="body1" fontWeight={600}>
                      {name}
                    </Typography>
                  </Stack>
                </TableCell>

                {isTeam && (
                  <>
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>
                        {(item as Team).wins}W - {(item as Team).losses}L
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color="success.main"
                      >
                        {(item as Team).points_for.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color="error.main"
                      >
                        {(item as Team).points_against.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        fontWeight={700}
                        color={
                          (item as Team).points_for -
                            (item as Team).points_against >
                          0
                            ? "success.main"
                            : "error.main"
                        }
                      >
                        {(item as Team).points_for -
                          (item as Team).points_against >
                        0
                          ? "+"
                          : ""}
                        {(
                          (item as Team).points_for -
                          (item as Team).points_against
                        ).toLocaleString()}
                      </Typography>
                    </TableCell>
                  </>
                )}

                {!isTeam && (
                  <>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {(item as Player).team}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        fontWeight={700}
                        color="primary.main"
                      >
                        {(item as Player).fantasy_points.toFixed(1)}
                      </Typography>
                    </TableCell>
                  </>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTable;
