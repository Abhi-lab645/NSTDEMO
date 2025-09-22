const btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
    random_num=Math.trunc((Math.random()*6)+1);
    console.log(random_num);
})