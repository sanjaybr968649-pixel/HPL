const HPL_TEAMS=[
 {id:'rk',name:'Royal Kings',short:'RK',ground:'Bangalore International Ground',logo:'./assets/royal-kings.png',players:['Sanjay','Darshan','Jordan Cox','Bhuvneshwar Kumar','Jacob Bethell','Jasprit Bumrah','Rashid Khan','Rajat Patidar']},
 {id:'ti',name:'Titans',short:'TI',ground:'Gujarat International Ground',logo:'./assets/titans.png',players:['Yashas','Vishnu','Shubman Gill','Manav S.','Phil Salt','Prince Yadav','Angkrish Raghuvanshi','Sai']},
 {id:'ch',name:'Chasers',short:'CH',ground:'Hyderabad International Ground',logo:'./assets/chasers.png',players:['Likith','Prajwal P.K','Joe Root','Steve Smith','Vaibhav Sooryavanshi','Ajinkya Rahane','Mahendra Singh Dhoni','Umesh Yadav']},
 {id:'st',name:'Stars',short:'ST',ground:'Rajasthan International Ground',logo:'./assets/stars.png',players:['Karan','Mohith','Ryan David Rickelton','Ben Angus Mayes','Mohammed Siraj','Yash Raj Punja','Shreyas Iyer','Kagiso Rabada']}
];
const HPL_PLAYERS=[
 {name:'Sanjay',team:'Royal Kings',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Mandya, Karnataka',number:2,runs:0,wickets:0,photo:'./assets/sanjay.jpg'},
 {name:'Darshan',team:'Royal Kings',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Tumakuru, Karnataka',number:46,runs:0,wickets:0,photo:'./assets/darshan.png'},
 {name:'Yashas',team:'Titans',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Hassan, Karnataka',number:7,runs:0,wickets:0,photo:'./assets/player-placeholder.svg'},
 {name:'Likith',team:'Chasers',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Hassan, Karnataka',number:18,runs:0,wickets:0,photo:'./assets/player-placeholder.svg'},
 {name:'Vishnu',team:'Titans',role:'Top-order batsman',bat:'Right-hand batsman',bowl:'Right-arm off-spin',place:'Chitradurga, Karnataka',number:18,runs:0,wickets:0,photo:'./assets/player-placeholder.svg'},
 {name:'Karan',team:'Stars',role:'All-rounder',bat:'Left-hand batsman',bowl:'Right-arm fast bowler',place:'Rajasthan, India',number:10,runs:0,wickets:0,photo:'./assets/player-placeholder.svg'},
 {name:'Mohith',team:'Stars',role:'Middle-order batsman',bat:'Right-hand batsman',bowl:'Right-arm off-spin',place:'Bihar, India',number:44,runs:0,wickets:0,photo:'./assets/player-placeholder.svg'},
 {name:'Prajwal',team:'Chasers',role:'Top-order batsman',bat:'Right-hand batsman',bowl:'Right-arm off-spin',place:'Bagalkot, Karnataka',number:6,runs:0,wickets:0,photo:'./assets/player-placeholder.svg'},
 ...['Jordan Cox','Bhuvneshwar Kumar','Jacob Bethell','Jasprit Bumrah','Rashid Khan','Rajat Patidar','Shubman Gill','Manav S.','Phil Salt','Prince Yadav','Angkrish Raghuvanshi','Sai','Joe Root','Steve Smith','Vaibhav Sooryavanshi','Ajinkya Rahane','Mahendra Singh Dhoni','Umesh Yadav','Ryan David Rickelton','Ben Angus Mayes','Mohammed Siraj','Yash Raj Punja','Shreyas Iyer','Kagiso Rabada'].map((name)=>({name,team:HPL_TEAMS.find(t=>t.players.includes(name))?.name||'',role:'Player',bat:'—',bowl:'—',place:'—',number:'—',runs:0,wickets:0,photo:'./assets/player-placeholder.svg'}))
];
const HPL_MATCHES=[
 {a:'Titans',b:'Chasers',score:'222/3 • 219/5',result:'Titans — recorded result: won by 2 wickets'},
 {a:'Royal Kings',b:'Stars',score:'134/2 • 126/5',result:'Royal Kings — recorded result: won by 3 wickets'},
 {a:'Royal Kings',b:'Chasers',score:'222/5 • 230/4',result:'Chasers — recorded result: won by 1 wicket'},
 {a:'Titans',b:'Royal Kings',score:'251/5 • 135/5',result:'Titans — won by 116 runs'},
 {a:'Titans',b:'Stars',score:'34/5 • 39/1',result:'Stars — won by 4 wickets'},
 {a:'Stars',b:'Chasers',score:'170/5 • 238/5',result:'Chasers — won by 68 runs'},
 {a:'Royal Kings',b:'Stars',score:'240/2 • 235/5',result:'Royal Kings — recorded result: won by 3 wickets'}
];
