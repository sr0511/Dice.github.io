var btn = document.querySelector("button");

btn.addEventListener('click',function(){
    var num = Math.floor((Math.random())*6)+1;
    var ranimg = "images/dice"+num+".png";
    var image = document.querySelector("img");
    image.setAttribute("src",ranimg);
    document.querySelector("p").innerHTML = "YOU GOT - "+num;
})
