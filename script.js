var root = document.documentElement;
var btn  = document.querySelector("button")
var flag =0;
btn.addEventListener("click",function(){
    if(flag==0)
    {
        root.style.setProperty("--page-color","#fff")
        root.style.setProperty("--font-color","#000")
        btn.innerHTML="DARK"
        flag=1;
    }
    else{
        root.style.setProperty("--font-color","#fff")
        root.style.setProperty("--page-color","#000")
        btn.innerHTML="LIGHT"
        flag=0;

    }
    // flag=0;
})
