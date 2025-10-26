from fastapi import APIRouter, Request
from app.services.suggest_service import get_league_suggestions
from app.services.cache_service import cached

router = APIRouter(prefix="/suggest", tags=["Suggest"])

@router.get("/")
@cached(minutes=30)
def league_suggestion(request: Request):
    return get_league_suggestions()
