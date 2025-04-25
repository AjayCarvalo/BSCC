'use client';
import { useEffect, useState } from 'react';

interface Match {
  id: string;
  match_date: string;
  home_club_name: string;
  home_team_name: string;
  away_club_name: string;
  away_team_name: string;
  ground_name: string;
}

const UpcomingFixtures = () => {
  const [fixtures1, setFixtures1] = useState<Record<string, Match[]>>({});
  const [fixtures2, setFixtures2] = useState<Record<string, Match[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch('https://play-cricket.com/api/v2/matches.json?&site_id=1360&season=2025&api_token=8b8d4ec609c085b80955ea647f7b29f6'),
          fetch('https://play-cricket.com/api/v2/matches.json?&site_id=11371&season=2025&api_token=13776c06d7c5517b705e9926873b8cec'),
        ]);

        if (!res1.ok || !res2.ok) {
          throw new Error('Failed to fetch one or both APIs.');
        }

        const data1 = await res1.json();
        const data2 = await res2.json();

        const filterNext4Weeks = (matches: Match[]) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Ensure `today` is a Date object with time set to start of the day
          const fourWeeksFromNow = new Date(today);
          fourWeeksFromNow.setDate(today.getDate() + 16); // Create a Date object 4 weeks from today

          const grouped: Record<string, Match[]> = {};

          matches.forEach((match) => {
            // Parse the UK format date (DD/MM/YYYY)
            const [day, month, year] = match.match_date.split('/').map(Number);
            const matchDate = new Date(year, month - 1, day); // Correctly create the Date object
            matchDate.setHours(0, 0, 0, 0); // Normalize time

            // Filter matches within the next 4 weeks
            if (matchDate >= today && matchDate <= fourWeeksFromNow) {
              const monthYear = matchDate.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
              if (!grouped[monthYear]) grouped[monthYear] = [];
              grouped[monthYear].push(match);
            }
          });

          return grouped;
        };

        setFixtures1(filterNext4Weeks(data1.matches || []));
        setFixtures2(filterNext4Weeks(data2.matches || []));
      } catch (err) {
        setError('Failed to fetch fixtures.');
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  const renderFixtureTable = (fixturesByMonth: Record<string, Match[]>, title: string) => (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      {Object.keys(fixturesByMonth).length === 0 ? (
        <p className="text-center">No fixtures found in the next 4 weeks.</p>
      ) : (
        Object.entries(fixturesByMonth).map(([month, matches]) => (
          <div key={month} className="mb-6">
            <h3 className="text-lg font-semibold bg-red-900 text-white px-4 py-2 rounded-md">{month}</h3>
            <table className="w-full border-collapse border border-gray-300 text-sm mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Home Team</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Away Team</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ground</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match) => {
                  const matchDate = new Date(match.match_date.split('/').reverse().join('-')); // Ensure UK date is parsed
                  return (
                    <tr
                      key={match.id}
                      className="border border-gray-300 hover:bg-gray-100 transition duration-200 even:bg-gray-50"
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {matchDate.toLocaleDateString('en-GB')}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {match.home_club_name} {match.home_team_name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {match.away_club_name} {match.away_team_name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{match.ground_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );

  if (loading) return <div className="p-6 text-center">🔄 Loading fixtures...</div>;
  if (error) return <div className="p-6 text-red-500 text-center">{error}</div>;

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row -mx-4">
        {renderFixtureTable(fixtures1, 'TVCL Fixtures')}
        {renderFixtureTable(fixtures2, 'MPCL Fixtures')}
      </div>
    </div>
  );
};

export default UpcomingFixtures;