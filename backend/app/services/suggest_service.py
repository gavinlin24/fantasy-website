import google.generativeai as genai
from app.services.espn_service import get_league
from app.config import GEMINI_API_KEY
import re

genai.configure(api_key=GEMINI_API_KEY)

def get_all_teams_data():
    """Get all teams' rosters and top free agents."""
    league = get_league()
    
    teams_data = []
    
    for team in league.teams:
        roster = []
        for player in team.roster:
            roster.append({
                "name": player.name,
                "position": player.position,
                "team": player.proTeam,
                "injured": player.injured,
                "total_points": player.total_points,
                "avg_points": player.avg_points
            })
        
        teams_data.append({
            "team_name": team.team_name,
            "owner": team.owners,
            "roster": roster
        })
    
    free_agents = []
    for player in league.free_agents(size=20):
        free_agents.append({
            "name": player.name,
            "position": player.position,
            "team": player.proTeam,
            "total_points": player.total_points,
            "avg_points": player.avg_points
        })
    
    return {
        "teams": teams_data,
        "free_agents": free_agents
    }

def parse_advice_to_json(advice_text, teams):
    """Parse Gemini's text response into structured JSON."""
    advice_list = []
    
    sections = re.split(r'TEAM:\s*', advice_text)
    
    for i, section in enumerate(sections[1:], 0):
        if i >= len(teams):
            break
            
        team_name = teams[i]['team_name']
        
        action_match = re.search(r'ACTION:\s*(\w+(?:/\w+)?)', section)
        action = action_match.group(1) if action_match else "HOLD"
        
        suggestion_match = re.search(r'SUGGESTION:\s*(.+?)(?=REASONING:|$)', section, re.DOTALL)
        suggestion = suggestion_match.group(1).strip() if suggestion_match else "No changes needed"
        
        reasoning_match = re.search(r'REASONING:\s*(.+?)(?=---|$)', section, re.DOTALL)
        reasoning = reasoning_match.group(1).strip() if reasoning_match else ""
        
        advice_list.append({
            "team": team_name,
            "action_type": action,
            "suggestion": suggestion,
            "reasoning": reasoning
        })
    
    return advice_list

def get_league_suggestions():
    """Get one piece of advice for each team in the league."""
    data = get_all_teams_data()
    
    prompt = """You are a fantasy basketball expert advisor. Analyze each team's roster and provide EXACTLY ONE actionable suggestion per team.

For each team, provide ONE of the following:
1. DROP/PICKUP: Suggest dropping one player and picking up a specific free agent
2. TRADE: Suggest a specific trade with another team in the league
3. HOLD: If the team is solid, say their roster is good as is

Format your response EXACTLY like this for each team:

TEAM: [Team Name]
ACTION: [DROP/PICKUP or TRADE or HOLD]
SUGGESTION: [Specific recommendation]
REASONING: [Brief 1-2 sentence explanation]

---

"""
    
    for i, team in enumerate(data['teams'], 1):
        prompt += f"\n=== TEAM {i}: {team['team_name']} ===\n"
        prompt += "ROSTER:\n"
        for player in team['roster']:
            status = " (INJURED)" if player['injured'] else ""
            prompt += f"- {player['name']} ({player['position']}, {player['team']}){status} - Avg: {player['avg_points']:.1f} pts\n"
    
    prompt += "\n=== TOP 20 AVAILABLE FREE AGENTS ===\n"
    for player in data['free_agents']:
        prompt += f"- {player['name']} ({player['position']}, {player['team']}) - Avg: {player['avg_points']:.1f} pts\n"
    
    prompt += "\n\nNow provide ONE actionable suggestion for EACH team listed above."

    try:
        model = genai.GenerativeModel('gemini-2.0-flash-lite')
        response = model.generate_content(prompt)
        
        advice_list = parse_advice_to_json(response.text, data['teams'])
        
        return advice_list
    
    except Exception as e:
        print(f"Error details: {e}")
        return {
            "error": str(e),
            "message": "Unable to generate advice at this time."
        }

if __name__ == "__main__":
    advice = get_league_suggestions()
    import json
    print(json.dumps(advice, indent=2))