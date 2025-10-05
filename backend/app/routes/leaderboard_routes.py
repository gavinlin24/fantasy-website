from fastapi import APIRouter
from app.services.leaderboard_service import get_team_leaderboard, get_player_leaderboard

router = APIRouter(prefix="/leaderboard", tags=["Leaderboard"])

@router.get("/teams")
def team_leaderboard():
    return get_team_leaderboard()

@router.get("/players")
def player_leaderboard():
    return get_player_leaderboard()