from app.services.espn_service import get_league

def get_team_leaderboard():
    """Return list of teams sorted by rank."""
    league = get_league()
    teams = sorted(league.teams, key=lambda team: team.standing)
    leaderboard = [
        {
            "team_name": team.team_name,
            "standing": team.standing,
            "logo": team.logo_url,
            "wins": team.wins,
            "losses": team.losses,
            "points_for": team.points_for,
            "points_against": team.points_against
        }
        for team in teams
    ]
    return leaderboard


def get_player_leaderboard():
    """Return players ranked by fantasy score."""
    league = get_league()
    players = []
    for team in league.teams:
        for player in team.roster:
            players.append({
                "player_name": player.name,
                "team": team.team_name,
                "fantasy_points": player.total_points
            })
    players.sort(key=lambda player: player["fantasy_points"], reverse=True)
    return players
