from fastapi import APIRouter
from app.services.news_service import get_latest_news
from app.services.cache_service import cached

router = APIRouter(prefix="/news", tags=["News"])

@router.get("/")
@cached(minutes=30)
def latest_news():
    return get_latest_news()