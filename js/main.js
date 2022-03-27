class Music {//clase MusicPlayer para poder hacer mi plantilla
    //inicializo mis valores
    constructor(num_list,name,nameSong,albumName,genre,cover) {
        this,num_list;//numero de la lista
        this.name = name;// artista
        this.nameSong=nameSong;// nombre de la cancion
        this. albumName= albumName;//album
        this.genre = genre;//genero
        this.cover = cover;//aqui la imagen
    }   
    // Métodos de mi clase
}
//iniciando mi clase

const song1 = new Music (0,"Celia Cruz","La vida es un Carnaval","Celia Cruz and Friends: A Night of Salsa", "Salsa")
console.log (song1);