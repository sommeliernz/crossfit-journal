/*
====================================================

CROSSFIT JOURNAL
app.js
PART 1

====================================================
*/

const content = document.getElementById("content");

let journal = JSON.parse(localStorage.getItem("journal"));

if (!journal) {

    journal = {
        completed: []
    };

}

function saveJournal() {

    localStorage.setItem(
        "journal",
        JSON.stringify(journal)
    );

}

function nextWorkout() {

    return journal.completed.length;

}

function formatDate(date) {

    return date.toLocaleDateString("en-NZ",{

        weekday:"short",
        day:"2-digit",
        month:"short",
        year:"numeric"

    });

}

function workoutDate(index){

    const d = new Date(PROGRAM_START);

    d.setDate(

        d.getDate() + (index * 2)

    );

    return d;

}

function getWorkout(index){

    return WORKOUTS[index % WORKOUTS.length];

}

function showToday(){

    const index = nextWorkout();

    if(index>=45){

        content.innerHTML=`

<h2>PROGRAM COMPLETE</h2>

<p>

Congratulations.

You completed all 45 workouts.

</p>

`;

        return;

    }

    const w = getWorkout(index);

    let html="";

    html+=`<h2>TODAY</h2>`;

    html+=`<p><b>DAY ${index+1} OF 45</b></p>`;

    html+=`<p>${formatDate(workoutDate(index))}</p>`;

    html+="<hr>";

    html+=`<h3>${w.title}</h3>`;

    html+=`<p>${w.type}</p>`;

    html+="<pre>";

    w.lines.forEach(line=>{

        html+=line+"\n";

    });

    html+="</pre>";

    html+="<hr>";

    html+=`

<label>

TIME

<input id="time">

</label>

<label>

RPE

<input id="rpe">

</label>

<label>

NOTES

<textarea id="notes"></textarea>

</label>

<button onclick="saveWorkout()">

SAVE WORKOUT

</button>

`;

    content.innerHTML=html;

}

function showCalendar(){

    let html="";

    html+="<h2>CALENDAR</h2>";

    html+="<pre>";

    html+="DAY  DATE                 STATUS\n";

    html+="----------------------------------------\n";

    for(let i=0;i<45;i++){

        const done=i<journal.completed.length;

        const day=(i+1).toString().padStart(2,"0");

        const date=formatDate(workoutDate(i));

        html+=`${day}   ${date}`;

        if(done){

            html+="    ✓";

        }

        html+="\n";

    }

    html+="</pre>";

    content.innerHTML=html;

}

function showHistory(){

    let html="<h2>HISTORY</h2>";

    if(journal.completed.length===0){

        html+="<p>No workouts logged.</p>";

        content.innerHTML=html;

        return;

    }

    journal.completed.forEach((entry,i)=>{

        html+=`

<hr>

<h3>

DAY ${i+1}

</h3>

<p>

${entry.date}

</p>

<p>

Time: ${entry.time}

</p>

<p>

RPE: ${entry.rpe}

</p>

<p>

${entry.notes}

</p>

`;

    });

    content.innerHTML=html;

}
/*
====================================================

CROSSFIT JOURNAL
app.js
PART 2

====================================================
*/

function saveWorkout(){

    const time=document.getElementById("time").value.trim();
    const rpe=document.getElementById("rpe").value.trim();
    const notes=document.getElementById("notes").value.trim();

    journal.completed.push({

        date:formatDate(new Date()),
        time:time,
        rpe:rpe,
        notes:notes

    });

    saveJournal();

    showToday();

}

function missionStatus(){

    const total=45;
    const done=journal.completed.length;

    let bar="";

    for(let i=0;i<30;i++){

        if(i<(done/total)*30){

            bar+="█";

        }else{

            bar+="░";

        }

    }

    return `

========================================

MISSION STATUS

${bar}

${done} / ${total} COMPLETE

${total-done} WORKOUTS REMAINING

========================================

`;

}

function homeHeader(){

    if(journal.completed.length>=45){

        return `
PROGRAM COMPLETE

`;
    }

    return missionStatus();

}

function renderHome(){

    showToday();

    const status=document.createElement("pre");

    status.textContent=homeHeader();

    content.prepend(status);

}

document
.getElementById("btnToday")
.addEventListener(

"click",

renderHome

);

document
.getElementById("btnCalendar")
.addEventListener(

"click",

showCalendar

);

document
.getElementById("btnHistory")
.addEventListener(

"click",

showHistory

);

window.addEventListener(

"load",

()=>{

    renderHome();

}

);
