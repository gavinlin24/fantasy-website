from espn_api.basketball import League
from app.config import LEAGUE_ID, YEAR, ESPN_S2, SWID

def get_league():
    """Return the League object."""
    return League(
        league_id=LEAGUE_ID,
        year=YEAR,
        espn_s2=ESPN_S2,
        swid=SWID
    )