import os
from espn_api.basketball import League
from dotenv import load_dotenv

load_dotenv()

league_id = os.getenv("LEAGUE_ID")
year = 2026
espn_s2 = os.getenv("ESPN_S2")
swid = os.getenv("SWID")

league = League(
    league_id=league_id,
    year=year,
    espn_s2=espn_s2,
    swid=swid
)
