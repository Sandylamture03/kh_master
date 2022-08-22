const fetch_promise = fetch("https://fakestoreapi.com/products");
fetch_promise.then(response => {
const json_promise = response.json();
json_promise.then(json_data => {
console.log(json_data);
display(json_data);
})
})
const display = data => {
    const parent = document.getElementById("product_container");
    for(i=0;i<data.length;i++){
        const single_data = data[i];
        const single_title = single_data.title;
        const single_price = single_data.price;
        const single_image = single_data.image;
        const single_rating = single_data.rating.rate;
        const single_rating_count = single_data.rating.count;
        const single_description = single_data.description;

        const img_element = document.createElement("img");
        img_element.src = single_image;

        const title_element = document.createElement("h3");
        title_element.innerText = single_title;

        const price_element = document.createElement("p");
        price_element.innerText = single_price;

        const add_to_cart = document.createElement("button");
        add_to_cart.innerText = "Add to Cart";

        const rating_element = document.createElement("p");
        rating_element.innerText = `rate: ${single_rating}`;

        const rating_count_element = document.createElement("p");
        rating_count_element.innerText = `count: ${single_rating_count}`;

        const description_element = document.createElement("p");
        description_element.innerText = single_description;

      

        const container_element = document.createElement("div");
        container_element.appendChild(img_element);
        container_element.appendChild(title_element);
        container_element.appendChild(price_element);
        
        container_element.appendChild(rating_element);
        container_element.appendChild(rating_count_element);
        container_element.appendChild(description_element);
        container_element.appendChild(add_to_cart);
        parent.appendChild(container_element);
}
    }