// ======================================== MOUNT CARD ======================================== //

$("body").append(
    $("<div>", {class: "card w-100 mt-5 bg-pokedex"}).append(
        $("<div>", {class: "card-body d-flex flex-column justify-content-center align-items-center", id: "card-body"}).append(
            $("<h1>", {text: "Capture seu Pokemon!", class: "mt-3 text-light "}),
            $("<h2>", {text: "Preparado para capturar seu Pokemon?", class: "text-light"}),
            $("<button>", {text: "CAPTURAR POKEMON", class:"btn btn-warning p-3 m-4", id: "search_pokemon", disabled: true})
        )
    ),
)
mountPokeball()
enableButton()

// ======================================== BUTTON SEARCH POKEMON ======================================== //
$("#search_pokemon").on("click", ()=>{
    $("#search_pokemon").prop("disabled",true)
    unmountPokeball()
    unmountPokemonView()
    let randomNumber = Math.floor(Math.random() * 247);
    setTimeout(() => {
        $.ajax({
          url: "https://pokeapi.co/api/v2/pokemon/" + randomNumber,
          type: "get",
          success: function (datas) {
            console.log(datas);
            mountPokemonViewl(datas)
          },
          error: function (error) {
            console.error(error);
            alert("Error in the request");
          },
        });
    }, 1000);
    setTimeout(() => {
        
        $("#search_pokemon").prop("disabled",false)
    }, 1000);

})

// ======================================== POKEBALL ========================================//

function mountPokeball() {
    $("#card-body").append(
        $("<div>", {class: "center-on-page d-flex flex-column justify-content-center align-items-center", id:"center-on-page"}).append(
            $("<div>", {class: "pokeball"}).append(
                $("<div>", {class: "pokeball-center"}).append(
                    $("<div>", {class: "pokeball-button", id: "pokeball-button"})
                )
            ),
        )
    )
}

function enableButton() {
    setTimeout(() => {
        $("#search_pokemon").prop("disabled",false)
    }, 2000);
}

function unmountPokeball() {
    $("#pokeball-button").css("box-shadow","0 0 20px 100px #FFFFFF")
    $("#pokeball-button").css("transition","all 2s ease")
    $("#pokeball-button").css("background","#FFFFFF")
    setTimeout(() => {
        $(".pokeball").css("box-shadow","0 0 30px 20px #FFFFFF")
        $(".pokeball").css("border","none")
        $(".pokeball").css("transition","all 1s ease")
    }, 700);
    setTimeout(() => {
        $(".pokeball").css("display","none")
        $(".pokeball").css("transition","display all 1s ease")
    }, 1000);
}

// ======================================== POKEMON VIEW ========================================//

function mountPokemonViewl(pokemon) {
    $("#center-on-page").append(
        $("<img>", { src: pokemon.sprites.other["official-artwork"].front_default, id:"pokemonImage"}),
        $("<h3>", {text:pokemon.name.toUpperCase(), id:"pokemonName", class:"text-center badge bg-primary fs-2"})
    )
}

function unmountPokemonView() {
    $("#pokemonImage").remove()
    $("#pokemonName").remove()
}