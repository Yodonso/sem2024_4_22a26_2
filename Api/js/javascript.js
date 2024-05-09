


function getInfo() {
    let codigo = document.getElementById("inso").value
    
    let url = `https://jsonplaceholder.typicode.com/posts/${codigo}`

    console.log(codigo)
    console.log(url)
    // Forma experto
    fetch(url)
        // Le da formato a la informacion de la API
        .then(res => res.json())
        // Procesar los datos
        .then( data => {

            console.log(data)
            let html = ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">                                
                                
                                    <div class="card-body",class="col-md-8">
                                        <h5 class="card-title"> 
                                            ${data.title}
                                        </h5>
                                        <p class="card-text">
                                            ${data.body}
                                        </p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                ${data.id} 
                                            </small>
                                        </p>
                                    </div>
                                
                            </div>
                        </div>`

            document.getElementById("inso").innerHTML = html

        })


   

     


}




