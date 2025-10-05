from fastapi import FastAPI
from app.routes.leaderboard_routes import router as leaderboard_router

app = FastAPI(title="Fantasy Basketball API")

app.include_router(leaderboard_router)

@app.get("/")
def root():
    return {"message": "Welcome to the Fantasy Basketball Recap API"}