
(function(){
    console.log('loaded');
    const target = document.getElementById('target');
    setTimeout(()=>{
        //paint
        target.style.backgroundColor='green';
    },1000)
    setTimeout(()=>{
        //paint
        target.style.backgroundColor='blue';
    },2000)
    setTimeout(()=>{
        //paint
        target.style.backgroundColor='yellow';
    },3000)
    setTimeout(()=>{
        //layout
        target.style.height=window.innerHeight/3+"px"
        //paint
        target.style.backgroundColor='orange';
    },4000)
})()