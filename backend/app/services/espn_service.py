from espn_api.basketball import League
from app.config import LEAGUE_ID, YEAR, ESPN_S2, SWID

# espn_service.py
from espn_api.basketball import League
from app.config import LEAGUE_ID, YEAR, ESPN_S2, SWID

def get_league():
    """Return the League object with current credentials."""
    return League(
        league_id=LEAGUE_ID,
        year=YEAR,
        espn_s2=ESPN_S2,
        swid=SWID
    )

def get_week_matchups(week: int):
    """Return all matchups for a given week."""
    league = get_league()
    return league.scoreboard(week)

def get_team(team_id: int):
    """Return a single team object by ID."""
    league = get_league()
    return league.get_team(team_id)