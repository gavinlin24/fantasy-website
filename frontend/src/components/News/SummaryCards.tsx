import { Box, Card, CardContent, Typography } from "@mui/material";

export function SummaryCards({
  addedCount,
  droppedCount,
  tradedCount,
  mostActiveTeam,
}: {
  addedCount: number;
  droppedCount: number;
  tradedCount: number;
  mostActiveTeam: [string, number] | null;
}) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 4 }}>
      <Box sx={{ flex: "1 1 calc(25% - 18px)", minWidth: "200px" }}>
        <Card
          elevation={3}
          sx={{
            borderRadius: 3,
            background: "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
            color: "white",
          }}
        >
          <CardContent sx={{ textAlign: "center", py: 3 }}>
            <Typography variant="h3" fontWeight="bold">
              {addedCount}
            </Typography>
            <Typography variant="h6">Additions</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ flex: "1 1 calc(25% - 18px)", minWidth: "200px" }}>
        <Card
          elevation={3}
          sx={{
            borderRadius: 3,
            background: "linear-gradient(135deg, #f44336 0%, #e53935 100%)",
            color: "white",
          }}
        >
          <CardContent sx={{ textAlign: "center", py: 3 }}>
            <Typography variant="h3" fontWeight="bold">
              {droppedCount}
            </Typography>
            <Typography variant="h6">Drops</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ flex: "1 1 calc(25% - 18px)", minWidth: "200px" }}>
        <Card
          elevation={3}
          sx={{
            borderRadius: 3,
            background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
            color: "white",
          }}
        >
          <CardContent sx={{ textAlign: "center", py: 3 }}>
            <Typography variant="h3" fontWeight="bold">
              {tradedCount}
            </Typography>
            <Typography variant="h6">Trades</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ flex: "1 1 calc(25% - 18px)", minWidth: "200px" }}>
        <Card
          elevation={3}
          sx={{
            borderRadius: 3,
            background: "linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)",
            color: "white",
            height: "100%",
          }}
        >
          <CardContent sx={{ textAlign: "center", py: 3 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2.5 }}>
              {mostActiveTeam ? mostActiveTeam[0] : "N/A"}
            </Typography>
            <Typography variant="body1">
              Most Active ({mostActiveTeam ? mostActiveTeam[1] : 0} moves)
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
