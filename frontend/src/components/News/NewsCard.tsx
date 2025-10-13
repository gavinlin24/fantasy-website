import {
  Card,
  CardContent,
  Stack,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { formatDate, getActionColor } from "./helpers";

export interface NewsItem {
  date: number;
  team: string;
  action: string;
  player: string;
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        transition: "all 0.3s ease",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="bold">
              {item.team}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDate(item.date)}
            </Typography>
          </Stack>
          <Box>
            <Chip
              label={item.action}
              color={getActionColor(item.action)}
              sx={{ fontWeight: "bold" }}
            />
          </Box>
          <Divider />
          <Typography variant="h6" color="text.primary">
            {item.player}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
