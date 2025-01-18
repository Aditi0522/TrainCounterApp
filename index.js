// document.getElementById("count-el").innerText=5

let count =0
let countEl= document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function increment(){
    count = count+1
    countEl.textContent=count
}

function save(){

    let history= count +" - "
    saveEl.textContent+=history
    countEl.textContent=0
    count=0
    
}