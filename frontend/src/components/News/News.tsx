import { useState, useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import { fetchNews } from "../../api/api";
import LoadingState from "../States/LoadingState";
import ErrorState from "../States/ErrorState";
import Header from "./Header";
import SummaryCards from "./SummaryCards";
import NewsCard from "./NewsCard";
import Empty from "./Empty";

export interface NewsItem {
  date: number;
  team: string;
  action: string;
  player: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const data: NewsItem[] = await fetchNews();
      setNews(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load news.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const getMostActiveTeam = (): [string, number] | null => {
    const teamCounts: { [key: string]: number } = {};
    news.forEach((item) => {
      teamCounts[item.team] = (teamCounts[item.team] || 0) + 1;
    });

    const sortedTeams = Object.entries(teamCounts).sort((a, b) => b[1] - a[1]);
    return sortedTeams.length > 0 ? sortedTeams[0] : null;
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  const addedCount = news.filter((n) => n.action.includes("ADDED")).length;
  const droppedCount = news.filter((n) => n.action.includes("DROPPED")).length;
  const tradedCount = news.filter((n) => n.action.includes("TRADED")).length;
  const mostActiveTeam = getMostActiveTeam();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "black",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Header />
        <SummaryCards
          addedCount={addedCount}
          droppedCount={droppedCount}
          tradedCount={tradedCount}
          mostActiveTeam={mostActiveTeam}
        />
        <Stack spacing={3}>
          {news.length === 0 ? (
            <Empty />
          ) : (
            news.map((item, index) => <NewsCard key={index} item={item} />)
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default News;
