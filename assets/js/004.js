// selectors
const subBtn = document.getElementById("sub-btn");

// addevent listener
subBtn.addEventListener("click", function(){
    if(subBtn.innerText === "Subscribe"){
        subBtn.classList.add("subscribed-active")
        subBtn.innerHTML = "Subscribed";
        
    }else{
        subBtn.classList.remove("subscribed-active")
        subBtn.innerHTML = "Subscribe";
        
    }
})

