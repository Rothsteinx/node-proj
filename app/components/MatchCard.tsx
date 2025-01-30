// components/MatchCard.tsx

import React from 'react';

interface MatchProps {
  match: {
    id: number;
    league: string;
    homeTeam: string;
    awayTeam: string;
    homeLogo: string;
    awayLogo: string;
    homeChance: number;
    awayChance: number;
    drawChance: number;
    date: string;
  };
}

const MatchCard: React.FC<MatchProps> = ({ match }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        {/* Home Team Logo */}
        <img src={match.homeLogo} alt={match.homeTeam} className="w-12 h-12 rounded-full" />
        
        {/* Match Details */}
        <div>
          <h3 className="text-xl font-semibold text-center">{match.homeTeam} vs {match.awayTeam}</h3>
          <p className="text-sm text-gray-400 text-center">{match.league} - {match.date}</p>
        </div>
        
        {/* Away Team Logo */}
        <img src={match.awayLogo} alt={match.awayTeam} className="w-12 h-12 rounded-full" />
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="text-green-500 font-semibold">{match.homeChance}% Home Win</div>
        <div className="text-yellow-500 font-semibold">{match.drawChance}% Draw</div>
        <div className="text-red-500 font-semibold">{match.awayChance}% Away Win</div>
      </div>
    </div>
  );
};

export default MatchCard;
