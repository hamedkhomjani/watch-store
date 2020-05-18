fetch("/assets/data/products.json")
    .then(response => response.json())
    .then(data => console.log(data));