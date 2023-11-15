let button = document.querySelector("button")

let modal = document.querySelector(".h1-2")

const btnOpen = () =>{
    modal.style.scale ="0.95"
}

const open = (e) =>{
    if(e.key == "x"){
        modal.style.scale = "0.95"
    }
}

const close = (e) =>{
    if(e.key == "Enter"){
        modal.style.scale = "0"
    }
}


button.addEventListener("click" , btnOpen)
document.addEventListener("keyup" , close )
document.addEventListener("keyup" , (e)=>{
    console.log(e.key);
    if(e.key == "x" ){
        modal.style.scale = "0.95"
    }
})

