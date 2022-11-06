const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark_light");
const searchToggle = document.querySelector(".searchToggle");
const sidebarClose = document.querySelector(".sidebarClose");
const sidebarOpen = document.querySelector(".sidebarOpen");

let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
    }


//JavaScript code to toggle dark and light mode.
      modeToggle.addEventListener("click",() =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //JavaScript Code to keep user selected mode even page refreshed or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode", "light-mode");
        }else{
            localStorage.setItem("mode","dark-mode");
        }
      }); 

//JavaScript code to toggle dark and light mode.
      searchToggle.addEventListener("click",() =>{
        searchToggle.classList.toggle("active");
      }); 

//JavaScript Code to toggle sidebar.

      sidebarOpen.addEventListener("click", ()=>{
        nav.classList.add("active");
      });

      body.addEventListener("click", e =>{
        let clickedElm = e.target;
        if(!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('menu')){
            nav.classList.remove("active");
        }
      });

    
