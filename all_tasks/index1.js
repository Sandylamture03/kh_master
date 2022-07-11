
function get_new_item(){
    let ip =document.getElementById("input1");
    ip.value;
     let p =document.createElement("li");
     p.innerText=ip.value;
        let ul =document.getElementById("list");
        ul.appendChild(p);
}


//  function to show check the password
        // function check_password() {
        //     let ip = document.getElementById("input2");
        //     let pass = ip.value;
        //     if(pass.length > 5) {
        //       alert("You can proceed");
        //     } else {
        //       alert("Use better password");
        //     }
        // }
