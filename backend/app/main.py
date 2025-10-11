from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import ALLOWED_ORIGINS
from app.routes import leaderboard_routes, news_routes

app = FastAPI(title="Fantasy Basketball API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(leaderboard_routes.router)
app.include_router(news_routes.router)

@app.get("/")
def root():
    return {"message": "Welcome to the Fantasy Basketball Recap API"}