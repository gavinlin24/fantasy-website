from app.services.espn_service import get_league

league = get_league()

def get_latest_news():
    """Return the latest news articles related to the league."""
    activities = league.recent_activity()
    news = []
    
    for activity in activities:
        for team, action, player, _ in activity.actions:
            news.append({
                "date": activity.date,
                "team": team.team_name,
                "action": action,
                "player": player
            })
    
    return news