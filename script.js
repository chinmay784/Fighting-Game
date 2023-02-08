let player1=document.getElementById('player1');

let player2=document.getElementById('player2');

let btn1=document.getElementById('btn1');

let btn2=document.getElementById('btn2');

let btn3=document.getElementById('btn3');

let btn4=document.getElementById('btn4');

let value1=document.getElementById('value1');

let value2=document.getElementById('value2');

let reasult=document.getElementById('reasult');

let reset=document.getElementById('reset');


var de=200;

function strike1(){
    const va=Math.ceil(Math.random()*20);
    console.log(va);
     de-=va;

     console.log(de);
     value1.innerHTML=`${de}`;
     document.getElementById('tow').play();
     if(de==0||de<0){
        reasult.innerHTML=`"JENCE WINS"`;
        document.getElementById('three').play();
    }
  

}

function strike2(){
    const vaaa=Math.ceil(Math.random()*20);
    console.log(vaaa);
     de-=vaaa;

     console.log(de);
     value2.innerHTML=`${de}`;
     document.getElementById('tow').play();
     if(de==0||de<0){
        reasult.innerHTML=`"LEANCE WINS"`;
        document.getElementById('three').play();
    }
  
}

function heal1(){
    const vcvc=Math.ceil(Math.random()*5);
    de+=vcvc;
    value1.innerHTML=`${de}`;
    document.getElementById('four').play();
  
}

function heal2(){
    const vcvcc=Math.ceil(Math.random()*5);
    de+=vcvcc;  
    value2.innerHTML=`${de}`;
    document.getElementById('four').play();
}


document.addEventListener('keydown',(e)=>{
    if(e.key=="p" && de>0){
        strike1();
     
    }
})

document.addEventListener('keydown',(e)=>{
    if(e.key=="q"&& de>0){
        strike2();
       
    }
})

document.addEventListener('keydown',(e)=>{
    if(e.key=="a"||e.key=="A"  && de<100){
        heal1()
    }
})

document.addEventListener('keydown',(e)=>{
    if(e.key=="l"|| e.key=="L" && de<100 ){
        heal2()
    }
})

reset.onclick=()=>{
    de=200;
    value1.innerHTML="200";
    value2.innerHTML="200";
    reasult.innerHTML="";
}