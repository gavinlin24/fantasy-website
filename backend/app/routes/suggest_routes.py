from fastapi import APIRouter, Request
from slowapi import Limiter
from slowapi.util import get_remote_address
from app.services.suggest_service import get_league_suggestions

router = APIRouter(prefix="/suggest", tags=["Suggest"])
limiter = Limiter(key_func=get_remote_address)


@router.get("/")
@limiter.limit("5/hour")
def league_suggestion(request: Request):
    return get_league_suggestions()
