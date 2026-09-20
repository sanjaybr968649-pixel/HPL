// HPL Players Database & Auto-Update Engine
const playersData = [
  {
    name: "Sanjay",
    jersey: "#02",
    team: "Royal King's",
    ground: "M. Chinnaswamy Stadium, Bengaluru",
    role: "All-Rounder (Captain)",
    batStyle: "Right Hand Bat",
    bowlStyle: "Right Arm Fast",
    place: "Mandya, Karnataka",
    img: "sanjay.png",
    icon: "👑",
    // Base Stats till Season 10
    baseMatches: 110,
    baseRuns: 6284,
    baseHighest: 247,
    base50s: 25,
    base100s: 22,
    baseOuts: 110 - 19,
    // Season 11 Scores: 40, 94, 62, 206*
    s11Matches: 4,
    s11Runs: 402,
    s11Highest: "206*",
    s1150s: 1,
    s11100s: 1,
    s11Outs: 3
  },
  {
    name: "Yashas",
    jersey: "#07",
    team: "Titans",
    ground: "Narendra Modi Stadium, Ahmedabad",
    role: "All-Rounder (Captain)",
    batStyle: "Right Hand Bat",
    bowlStyle: "Right Arm Fast",
    place: "Hassan, Karnataka",
    icon: "👑",
    baseMatches: 112,
    baseRuns: 7025,
    baseHighest: 307,
    base50s: 26,
    base100s: 25,
    baseOuts: 112 - 44,
    // Season 11 Scores: 11, 124, 13
    s11Matches: 3,
    s11Runs: 148,
    s11Highest: "124",
    s1150s: 0,
    s11100s: 1,
    s11Outs: 3
  },
  {
    name: "Likith",
    jersey: "#18",
    team: "Chasers",
    ground: "Rajiv Gandhi International Stadium, Hyderabad",
    role: "All-Rounder (Captain)",
    batStyle: "Right Hand Bat",
    bowlStyle: "Right Arm Fast",
    place: "Karnataka, India",
    icon: "🦁",
    baseMatches: 115,
    baseRuns: 6266,
    baseHighest: 386,
    base50s: 18,
    base100s: 19,
    baseOuts: 115 - 21,
    // Season 11 Scores: 21, 0, 9
    s11Matches: 3,
    s11Runs: 30,
    s11Highest: "21",
    s1150s: 0,
    s11100s: 0,
    s11Outs: 3
  },
  {
    name: "Dharshan",
    jersey: "#46",
    team: "Royal King's",
    ground: "M. Chinnaswamy Stadium, Bengaluru",
    role: "All-Rounder",
    batStyle: "Right Hand Bat",
    bowlStyle: "Right Arm Fast",
    place: "Tumakuru, Karnataka",
    img: "dharshan.png",
    icon: "⚡",
    baseMatches: 111,
    baseRuns: 5638,
    baseHighest: 368,
    base50s: 25,
    base100s: 17,
    baseOuts: 111 - 27,
    // Season 11 Scores: 38, 4, 0, 0
    s11Matches: 4,
    s11Runs: 42,
    s11Highest: "38",
    s1150s: 0,
    s11100s: 0,
    s11Outs: 4
  },
  {
    name: "Vishnu",
    jersey: "#18",
    team: "Titans",
    ground: "Narendra Modi Stadium, Ahmedabad",
    role: "Top-Order Batter",
    batStyle: "Right Hand Bat",
    bowlStyle: "Right Arm Off Spin",
    place: "Chitradurga, Karnataka",
    img: "vishnu.png",
    icon: "🛡️",
    baseMatches: 95,
    baseRuns: 4335,
    baseHighest: 238,
    base50s: 18,
    base100s: 17,
    baseOuts: 95 - 22,
    // Season 11 Scores: 165, 46, 0
    s11Matches: 3,
    s11Runs: 211,
    s11Highest: "165",
    s1150s: 0,
    s11100s: 1,
    s11Outs: 3
  },
  {
    name: "Mohit",
    jersey: "#44",
    team: "Stars",
    ground: "Sawai Mansingh Stadium, Jaipur",
    role: "Middle-Order Batter",
    batStyle: "Right Hand Bat",
    bowlStyle: "Right Arm Off Spin",
    place: "Bihar, India",
    img: "mohit.png",
    icon: "⭐",
    baseMatches: 0,
    baseRuns: 0,
    baseHighest: 0,
    base50s: 0,
    base100s: 0,
    baseOuts: 0,
    // Season 11 Scores: 42, 8*, 29, 63
    s11Matches: 4,
    s11Runs: 142,
    s11Highest: "63",
    s1150s: 1,
    s11100s: 0,
    s11Outs: 3
  },
  {
    name: "Karan",
    jersey: "-",
    team: "Stars",
    ground: "Sawai Mansingh Stadium, Jaipur",
    role: "All-Rounder",
    batStyle: "Right Hand Bat",
    bowlStyle: "Left Arm Medium Fast",
    place: "Rajasthan, India",
    icon: "⭐",
    baseMatches: 0,
    baseRuns: 0,
    baseHighest: 0,
    base50s: 0,
    base100s: 0,
    baseOuts: 0,
    // Season 11 Scores: 31, 31, 43, 55 (14 Wkts)
    s11Matches: 4,
    s11Runs: 160,
    s11Highest: "55",
    s1150s: 1,
    s11100s: 0,
    s11Outs: 4,
    s11Wickets: 14
  },
  {
    name: "Prajwal P.K",
    jersey: "-",
    team: "Chasers",
    ground: "Rajiv Gandhi International Stadium, Hyderabad",
    role: "Top-Order Batter",
    batStyle: "Right Hand Bat",
    bowlStyle: "-",
    place: "Karnataka, India",
    icon: "🏏",
    baseMatches: 0,
    baseRuns: 0,
    baseHighest: 0,
    base50s: 0,
    base100s: 0,
    baseOuts: 0,
    // Season 11 Scores: 70, 0, 73
    s11Matches: 3,
    s11Runs: 143,
    s11Highest: "73",
    s1150s: 2,
    s11100s: 0,
    s11Outs: 3
  }
];

const container = document.getElementById('players-container');

playersData.forEach(p => {
  // Automatic Calculation Logic
  const totalMatches = p.baseMatches + p.s11Matches;
  const totalRuns = p.baseRuns + p.s11Runs;
  const total50s = p.base50s + p.s1150s;
  const total100s = p.base100s + p.s11100s;

  const s11NumHS = parseInt(p.s11Highest);
  const totalHighest = Math.max(p.baseHighest, isNaN(s11NumHS) ? 0 : s11NumHS);

  const totalOuts = p.baseOuts + p.s11Outs;
  const totalAvg = totalOuts > 0 ? (totalRuns / totalOuts).toFixed(1) : totalRuns;

  const card = document.createElement('div');
  card.className = 'player-card';

  // Photo fallback
  const mediaHtml = p.img 
    ? `<img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<div class=\\'avatar-icon\\'>${p.icon}</div>'">` 
    : `<div class="avatar-icon">${p.icon}</div>`;

  card.innerHTML = `
    <div class="photo-box">${mediaHtml}</div>
    <div class="header-row">
      <h2>${p.name} ${p.jersey !== '-' ? p.jersey : ''}</h2>
      <span class="badge">${p.team}</span>
    </div>
    <ul class="info-list">
      <li>Home Ground: <span>${p.ground}</span></li>
      <li>Role: <span>${p.role}</span></li>
      <li>Bowling Style: <span>${p.bowlStyle}</span></li>
      <li>Place: <span>${p.place}</span></li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>Format / League</th>
          <th>M</th>
          <th>Runs</th>
          <th>HS</th>
          <th>Avg</th>
          <th>50 / 100</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Season 11</td>
          <td>${p.s11Matches}</td>
          <td>${p.s11Runs}${p.s11Wickets ? ` (${p.s11Wickets}w)` : ''}</td>
          <td>${p.s11Highest}</td>
          <td>${(p.s11Runs / (p.s11Outs || 1)).toFixed(1)}</td>
          <td>${p.s1150s} / ${p.s11100s}</td>
        </tr>
        <tr class="highlight">
          <td>HPL (All-Time)</td>
          <td>${totalMatches}</td>
          <td>${totalRuns}</td>
          <td>${totalHighest}</td>
          <td>${totalAvg}</td>
          <td>${total50s} / ${total100s}</td>
        </tr>
      </tbody>
    </table>
  `;

  container.appendChild(card);
});
