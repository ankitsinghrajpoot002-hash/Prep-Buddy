let t0=0,acc=0,run=0,iv=0;
const el=()=>Math.floor((acc+(run?Date.now()-t0:0))/1e3);
onmessage=e=>{const c=e.data.c;
 if(c==='start'){acc=0;t0=Date.now();run=1;clearInterval(iv);iv=setInterval(()=>postMessage(el()),250)}
 else if(c==='pause'){if(run){acc+=Date.now()-t0;run=0}postMessage(el())}
 else if(c==='resume'){if(!run){t0=Date.now();run=1}}
 else if(c==='stop'){clearInterval(iv);acc=0;run=0}};
