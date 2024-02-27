// pegando o DOM
const imagem = document.querySelector(".poster")
let titulo = document.querySelector(".movie-title")
const sinopse = document.querySelector(".sinopse")
const genero = document.querySelector(".genre")
const diretor = document.querySelector(".diretor")
const rating = document.querySelector(".rating")
const form = document.getElementById("form1")
const formulario = document.getElementById("formulario")
const hero = document.querySelector(".hero-container")
const bttn = document.getElementsByTagName("submit")
const popup = document.querySelector(".errpopup")
let testando;

function submitForm(event){
    event.preventDefault();

    if (form.value.length){
        testando = form.value;
        dadosFilme();
        
    } else {
        popup.textContent = "❌ Please insert a Movie name"
        popup.style.visibility = "visible"
    }
}

function updateHTML(data){
    rating.textContent = data.imdbRating + "⭐"
    diretor.textContent = data.Director
    genero.textContent = data.Genre
    titulo.textContent = data.Title + " ("+data.Year + ")"
    sinopse.textContent = data.Plot
    imagem.src=data.Poster
}

async function dadosFilme() {  
    
    // request da API
    const response = await fetch(`http://www.omdbapi.com/?apikey=7fdec854&t=${testando}`)
    const data = await response.json()

    // mudando o conteudo de texto
     if (data.Response != "False"){
        updateHTML(data);
        setTimeout(() => {
            hero.style.visibility="visible"
            popup.style.visibility="hidden"
        }, 100)
     } else{
        hero.style.visibility="hidden"
        popup.style.visibility="visible"
        popup.textContent = "❌ Movie not Found"
     }
     console.log(data)
}


// chamada da função
