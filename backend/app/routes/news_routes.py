from fastapi import APIRouter
from app.services.news_service import get_latest_news

router = APIRouter(prefix="/news", tags=["News"])

@router.get("/")
def team_leaderboard():
    return get_latest_news()