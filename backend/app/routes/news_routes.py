from fastapi import APIRouter
from app.services.news_service import get_latest_news

router = APIRouter(prefix="/news", tags=["News"])

@router.get("/")
def latest_news():
    return get_latest_news()