// selectors 
const addBtn = document.getElementById("addbtn");
const buyBtn = document.getElementById("buybtn");

// add eventslisteners
addBtn.addEventListener("click", function(){
    window.alert("Added")
})

buyBtn.addEventListener("click", ()=>{
    console.log("Loading...");
    window.alert("Purchased")
})