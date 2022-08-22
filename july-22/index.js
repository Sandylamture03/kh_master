
// const responce = fetch("https://reqres.in/api/users");
// console.log(responce);
// responce.then((data =>{
//     console.log(response);
//     console.log(data);
// }));

const display_data = res =>{
    console.log(res.data);
    const parent = document.getElementById("container");
    for(i =0; i < res.data.length; i++){
        const single_data = res.data[i];
        const new_li = document.createElement("div");
        new_li.innerText =`${single_data.email} (${single_data.first_name} ${single_data.last_name})  `;
        // new_li.innerHTML =`<img src="${single_data.avatar}"></img>`;
        const new_image = document.createElement("img");
        new_image.src = single_data.avatar;
        new_li.appendChild(new_image);

        parent.appendChild(new_li);
       
    }
}

const fetch_promise = fetch("https://reqres.in/api/users");
fetch_promise.then( response => {
    const json_response = response.json();
    json_response.then((data) => {
        display_data(data);
    });
});