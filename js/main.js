var input = document.getElementById('input')
input.value = "sports";

fetch("https://saurav.tech/NewsAPI/top-headlines/category/" + input.value + "/us.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.articles);
        var output = data.articles;
        output.forEach(function(output) {

            document.getElementById("container").innerHTML += `
            <div class="col-lg-3 p-3 m-4 card">
            <a src="${output.url}">
            <div class="card-content">

            <img src="${output.urlToImage}">
            <h3>${output.title}</h3>

            <p>${output.description}</p>   
            <div class="d-flex">      
            <p class="p-3">Author: ${output.author}</p>
            <p class="p-3">${output.source.name}</p>
            </div>
            </div>
            </a>
            </div>
        `;
        });
    });

input.addEventListener('blur', () => {

    fetch("https://saurav.tech/NewsAPI/top-headlines/category/" + input.value + "/us.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.articles);
            var output = data.articles;
            output.forEach(function(output) {

                document.getElementById("container").innerHTML += `
                    <div class="col-lg-3 p-3 m-4 card">
                    <a src="${output.url}">
                    <div class="card-content">

                    <img src="${output.urlToImage}">
                    <h3>${output.title}</h3>

                    <p>${output.description}</p>   
                    <div class="d-flex">      
                    <p class="p-3">Author: ${output.author}</p>
                    <p class="p-3">${output.source.name}</p>
                    </div>
                    </div>
                    </a>
                    </div>
                `;
            });
        });
    document.getElementById("container").innerHTML = '';
})