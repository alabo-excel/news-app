var input = document.getElementById('input')



input.addEventListener('blur', () => {

    fetch("https://saurav.tech/NewsAPI/top-headlines/category/" + input.value + "/us.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.articles);
            var output = data.articles;
            output.forEach(function(item) {

                document.getElementById("container").innerHTML += `
            <div class="col-lg-3 p-3 m-5 card">
            <a src="${item.url}">
            <div class="card-content">

            <img src="${item.urlToImage}">
            <h3>${item.title}</h3>

            <p>${item.description}</p>   
            <div class="d-flex">      
            <p class="p-3">Author: ${item.author}</p>
            <p class="p-3">${item.source.name}</p>
            </div>
            </div>
            </a>
            </div>
            `;
            });
        });
})