let body = document.querySelector("body")
let modeBtn = document.querySelector("#mode-btn")
let close = document.querySelector(".close")
let left = document.querySelector(".left")
let logo = document.querySelector(".logo")
let logo1 = document.querySelector("#logo1")
let menu = document.querySelector(".menu")
let left2 = document.querySelector(".left2")
let clicking = document.querySelectorAll(".clicking")

modeBtn.addEventListener("click",()=>{
    body.classList.toggle("dark")

    if (modeBtn.textContent == "light_mode") {
        modeBtn.textContent = "dark_mode"
    }else{
        modeBtn.textContent = "light_mode"
    }
})
 

close.addEventListener("click",()=>{
    left.classList.toggle("less")
    close.classList.toggle("rotate")

    if(left.classList.contains("less")) {
        logo.style.display = "none"
    }else{
        logo.style.display = "flex"
    }
})

menu.addEventListener("click",()=>{
    left2.classList.toggle("less2")

    if (left2.classList.contains("less2")) {
        logo1.innerHTML = "close"
    }else{
        logo1.innerHTML = "menu"
    }
})

clicking.forEach((clicked)=>{
    clicked.addEventListener("click",()=>{
        left.classList.toggle("less")
        logo.style.display = "flex"
        close.classList.toggle("rotate")
    })  
})


order.forEach((orderrr)=>{
    let tr = document.createElement("tr")
    tr.innerHTML =`
         <td>${orderrr.productName}</td>
         <td>${orderrr.productNumber}</td>
         <td>${orderrr.productStatus}</td>
         <td>${orderrr.productNumber}</td>
    `
    let tbody = document.querySelector(".body")
    tbody.appendChild(tr)
})