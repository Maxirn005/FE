const aplicacion = document.querySelector ("#app")

fetch('https://jsonplaceholder.typicode.com/users')

    .then (datos => datos.json ())
    .then (data => {
        data.forEach(usuario=> {
            console.log (usuario.name)
            const p = document.createElement ("p")
            p.innerHTML = usuario.name
            aplicacion.appendChild (p)
            
        });
    });
