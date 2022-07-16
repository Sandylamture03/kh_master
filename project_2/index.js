let numberContainerElement = document.getElementById("number-container");
for(let index =0; index < 100; index++){
    let numberDivElement = document.createElement("div");
   numberDivElement.innerText = index;
    numberDivElement.classList.add("container-item");
    numberDivElement.classList.add("number-container");
    if(index % 2 === 0){
        numberDivElement.style.backgroundColor = "cyan";                                                                                       
    }else{
        numberDivElement.style.backgroundColor = "lightblue";
    }
    numberContainerElement.appendChild(numberDivElement);
}
