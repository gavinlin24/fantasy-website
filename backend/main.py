from app.services.espn_service import get_league

league = get_league()
print(league.settings)