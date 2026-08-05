const workouts = [

{
day:1,
date:"2026-08-05",
title:"WOD 1",
type:"5 ROUNDS FOR TIME",
workout:[
"400 m Run",
"15 Air Squats",
"12 Push-ups",
"10 Ring Rows",
"15 Sit-ups"
]
},

{
day:2,
date:"2026-08-07",
title:"WOD 2",
type:"AMRAP 25",
workout:[
"500 m Row",
"15 KB Swings",
"12 Box Step-ups",
"10 Burpees",
"8 DB Push Press / arm"
]
},

{
day:3,
date:"2026-08-09",
title:"WOD 3",
type:"5 ROUNDS",
workout:[
"10 Goblet Squats",
"10 DB Push Press",
"15 Ring Rows",
"250 m Row",
"Rest 1 minute"
]
},

{
day:4,
date:"2026-08-11",
title:"WOD 4",
type:"FOR TIME",
workout:[
"50 Wall Balls",
"40 Walking Lunges",
"30 Push-ups",
"20 Burpees",
"20 Ring Rows",
"10 Pull-up Progressions"
]
},

{
day:5,
date:"2026-08-13",
title:"WOD 5",
type:"EMOM 30",
workout:[
"Minute 1: 12 Cal Row",
"Minute 2: 12 DB Thrusters",
"Minute 3: 10 Bent-over Rows"
]
},

{
day:6,
date:"2026-08-15",
title:"WOD 6",
type:"4 ROUNDS",
workout:[
"500 m Run",
"15 DB Deadlifts",
"20 Walking Lunges",
"15 Box Jumps",
"12 Single-arm DB Rows / side"
]
},

{
day:7,
date:"2026-08-17",
title:"WOD 7",
type:"AMRAP 20",
workout:[
"7 Ring Rows",
"10 Push-ups",
"15 Air Squats"
]
},

{
day:8,
date:"2026-08-19",
title:"WOD 8",
type:"5 ROUNDS",
workout:[
"250 m Row",
"12 Alternating DB Snatches",
"15 Goblet Squats",
"10 Burpees",
"10 DB Strict Press"
]
},

{
day:9,
date:"2026-08-21",
title:"WOD 9",
type:"6 ROUNDS",
workout:[
"400 m Run",
"10 Push-ups",
"10 Ring Rows",
"15 Sit-ups"
]
},

{
day:10,
date:"2026-08-23",
title:"WOD 10",
type:"4 ROUNDS",
workout:[
"15 KB Swings",
"15 Romanian Deadlifts",
"15 Ring Rows",
"20 Russian Twists",
"250 m Row",
"20 m Farmer Carry"
]
},

{
day:11,
date:"2026-08-25",
title:"WOD 11",
type:"AMRAP 35",
workout:[
"500 m Row",
"400 m Run",
"20 Air Squats",
"15 Sit-ups",
"10 Burpees",
"12 DB Push Press"
]
},

{
day:12,
date:"2026-08-27",
title:"WOD 12",
type:"5 ROUNDS",
workout:[
"10 Front Squats",
"10 Push Press",
"12 Bent-over Rows",
"10 Reverse Lunges / leg",
"200 m Run"
]
},

{
day:13,
date:"2026-08-29",
title:"WOD 13",
type:"10 ROUNDS",
workout:[
"10 Burpees",
"10 Box Jumps",
"200 m Run",
"Every second round: 10 Ring Rows"
]
},

{
day:14,
date:"2026-08-31",
title:"WOD 14",
type:"4 ROUNDS",
workout:[
"500 m Row",
"15 Wall Balls",
"12 Push-ups",
"20 Walking Lunges",
"10 KB Swings",
"10 DB Shoulder Press"
]
},

{
day:15,
date:"2026-09-02",
title:"WOD 15",
type:"FOR TIME",
workout:[
"800 m Run",
"50 Air Squats",
"40 Ring Rows",
"40 Sit-ups",
"30 Push-ups",
"20 DB Thrusters",
"10 Burpees",
"800 m Run"
]
}

];

// Build the remaining 30 sessions automatically

const fullProgram = [];

for(let round=0; round<3; round++){

    workouts.forEach((w,index)=>{

        fullProgram.push({

            id:fullProgram.length+1,

            wod:w.title,

            type:w.type,

            workout:w.workout,

            date:w.date,

            round:round+1

        });

    });

}
