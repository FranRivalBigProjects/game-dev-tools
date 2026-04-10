const res=document.getElementById('res');
function run(){
let txt=document.getElementById('input').value.toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('fps')) out+='- Frame rate scenario detected\n';
if(txt.includes('latency')) out+='- Network latency impact\n';
if(txt.includes('sync')) out+='- Multiplayer sync context\n';
if(txt.includes('physics')) out+='- Physics simulation detected\n';
if(txt.includes('memory')) out+='- Memory usage considerations\n';

if(val){
  out+='- Input metric: '+val+'\n';
}

out+='- Optimize game loop, network, and performance\n';

res.innerText=out;
}