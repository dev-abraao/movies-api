// pegando o DOM

const imagem = document.querySelector(".poster")
let titulo = document.querySelector(".movie-title")
const sinopse = document.querySelector(".sinopse")
const genero = document.querySelector(".genre")
const diretor = document.querySelector(".diretor")
const rating = document.querySelector(".rating")
const form = document.getElementById("form1")
const formulario = document.getElementById("formulario")
let testando = "Donnie Darko"

formulario.addEventListener('submit',  function(e) {
    testando = form.value;
    dadosFilme();
    // impede o envio do form
    e.preventDefault();
});

async function dadosFilme() {  
    
    // request da API
    const response = await fetch(`http://www.omdbapi.com/?apikey=7fdec854&t=${testando}`)
    const data = await response.json()

    // mudando o conteudo de texto
    rating.textContent = data.imdbRating + "⭐"
    diretor.textContent = data.Director
    genero.textContent = data.Genre
    titulo.textContent = data.Title + " ("+data.Year + ")"
    sinopse.textContent = data.Plot
    imagem.src=data.Poster


    console.log(data)   
}
// chamada da função