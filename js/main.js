const listaCanciones =[
{
    title:"La vida es un carnval",
    artist:"Celia Cruz",
    file: "song1.mp3",
    cover: "caractula1.jfif",
    duration: "4:38",
    album: "Celia Cruz and Friends: A Night of Salsa",
    añoLanzamiento:"1999",
    genre:"Salsa"
},
{    
    title:"Si tú no bailas conmigo",
    artist:"Juan Luis Guerra",
    file:"song2.mp3",
    cover:"caratula2.jfif",
    duration:"2:42",
    album:"La llave de mi Corazón",
    añoLanzamiento:"2007",
    genre:"Desconocido"
},
{    
    title:"Más que tú amigo",
    artist:"Tito Nieves",
    file:"caratula.jpg",
    cover:"song3.mp3",
    duration:"4:12",
    album:"Canciones clásicas de Marco Antonio Solís",
    añoLanzamiento:"2007",
    genre:"Salsa y Tropical"
},
{    
    title:"Vivo pensando en ti",
    artist:"Felipe Peláez y Maluma",
    file:"song4.mp3",
    cover:"caractula4.jfif",
    duration:"4:05",
    album:"Ponle actitud",
    añoLanzamiento:"2017",
    genre:"Desconocido"
},
{    
    title:"Amor y control",
    artist:"Rubén Blades",
    file:"song5.mp3",
    cover:"caratula5.jfif",
    duration:"05:49",
    album:"Una Década",
    añoLanzamiento:"1992",
    genre:"Electro"
}    
]
//aqui van los elementos del Dom
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")//caratula
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progressContainer")
