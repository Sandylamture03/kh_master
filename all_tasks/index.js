let counter =0;
function incriment(){
    counter = counter + 1;
    let p =document.getElementById("count");
    p.innerText = counter;
    

}

function decriment(){
    counter = counter - 1;
    let q = document.getElementById("count");
    q.innerText = counter;
    

}