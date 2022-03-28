const fetchPokemon = () => {
    const pokename = document.getElementById("pokeName");
    let pokeInput = pokename.value.toLowerCase(); //consulta de acuerdo a lo ingresado y cambia el texto a minusculas
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; //solicita a la API info desde el input
    fetch(url).then((res) => {
        //condicion para controlar error al ingresar mal el nombre de un pokemon
        if (res.status != "200"){
            pokeImag("./img/pokebola.gif");
            errorPoke();
        }
        else{
            return res.json(); //manda llamar el objeto pokemon
        }
    }).then((data) => {
        console.log(data); // imprime la informacion en la consola
        let pokeImg = data.sprites.front_default; //obtiene un dato en especifico del objeto, en este caso la imagen
        pokeImag(pokeImg); // muestra en HTML
        let namePokemon = data.name;
        let numPoke = data.id;
        let fuerzaPoke = data.stats[0].base_stat;
        let atPoke = data.stats[1].base_stat;
        let defPoke = data.stats[2].base_stat;
        let velPoke = data.stats[5].base_stat;
        nombrePokemon(namePokemon, numPoke);
        weightPoke(fuerzaPoke);
        atakPok(atPoke);
        defePoke(defPoke);
        veloPoke(velPoke);
    })
}

//fetchPokemon(); //ejecuta en la consola

const pokeImag = (url) => {
    const pokeImag = document.getElementById("PokeImg");
    pokeImag.src = url; //indica que en la etiqueta img se colocara el url en href
    pokeImag.style.height = "200px";
}

const nombrePokemon = (np, pn) => {
    const nomPoke = document.getElementById("namePokemon");
    nomPoke.innerHTML =`${np} (${pn})`;
}

const weightPoke = (hp) => {
    let weightP  = document.getElementById("weightP");
    weightP.innerHTML = `HP: ${hp}`;
}

const atakPok = (ap) =>{
    let atackPoke= document.getElementById("ataque");
    atackPoke.innerHTML = `Ataque: ${ap}`;
}

const defePoke = (def) =>{
    let defPoke= document.getElementById("defensa");
    defPoke.innerHTML = `Defensa: ${def}`;
}

const veloPoke = (vel) =>{
    let velPoke= document.getElementById("velocidad");
    velPoke.innerHTML = `Velocidad: ${vel}`;
}

const errorPoke = () => {
    let msj = document.getElementById("namePokemon");
    let weight = document.getElementById("weightP");
    let atackPoke= document.getElementById("ataque");
    let defPoke= document.getElementById("defensa");
    let velPoke= document.getElementById("velocidad");
    msj.innerHTML = "no se encontro <br> pokemon";
    weight.innerHTML = "";
    atackPoke.innerHTML = "";
    defPoke.innerHTML = "";
    velPoke.innerHTML = "";
}

//pokeImag("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png");
