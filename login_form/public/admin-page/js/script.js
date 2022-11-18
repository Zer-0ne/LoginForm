
//  x = document.getElementById('time').innerText;
setInterval(()=>{
    
    const now = new Date();
    document.getElementById('demo6').innerText=now.toDateString();
},1000)
//  document.getElementById('name').innerHTML= 'sahil khan'
 function show(){
    let showhide = document.getElementById('menudiv');
    if(showhide.style.display!='none'){
        showhide.style.display ='none';
    }
    else{
        showhide.style.display ='flex';
    }
    // showhide.style.display ='flex';
}
function hide(){
    let showhide = document.getElementById('menudiv');
    // if(showhide.style.display!='none'){
    //     showhide.style.display ='none';
    // }
    // else{
    //     showhide.style.display ='block';
    // }
    showhide.style.display ='none';
}
function show1(){
    let showhide = document.getElementById('aboutdiv');
    if(showhide.style.display!='none'){
        showhide.style.display ='none';
    }
    else{
        showhide.style.display ='flex';
    }
    // showhide.style.display ='flex';
}
function hide1(){
    let showhide = document.getElementById('aboutdiv');
    // if(showhide.style.display!='none'){
    //     showhide.style.display ='none';
    // }
    // else{
    //     showhide.style.display ='block';
    // }
    showhide.style.display ='none';
}