import os
from dotenv import load_dotenv

load_dotenv()

LEAGUE_ID = os.getenv("LEAGUE_ID")
YEAR = int(os.getenv("YEAR"))
ESPN_S2 = os.getenv("ESPN_S2")
SWID = os.getenv("SWID")
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS").split(",")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")