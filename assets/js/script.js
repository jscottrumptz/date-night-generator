//                  //
// global variables //
//                  //

// strings that hold the currently featured item ids
let featuredMovie = "343611";
let featuredMeal = "52772";
let featuredDrink = "11007";

// array that holds the previously saved date nights
let savedDateNights = [
    { 
        id: 1, 
        movie: "35056", 
        movieImg: "https://www.themoviedb.org/t/p/w500/oXwpl4mdd8MYPkUMggREzSf9c5R.jpg",
        meal: "52992",
        mealImg: "https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg",
        drink: "11001",
        drinkImg: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg"
    },
    { 
        id: 2, 
        movie: "2493", 
        movieImg: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/whF3YddFYSwJNuHEvi5lpsnty2l.jpg",
        meal: "52987",
        mealImg: "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
        drink: "11009",
        drinkImg: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg"
        }
];

//           //
// functions //
//           //

// get a random movie by genre
let getRandomMovie = function () {
    let genre = $("#movie-genre").val() || [];
    console.log (genre);
};

// get a random meal by type
let getRandomMealByType = function() {
    let type = $("#meal-type").val() || [];
    console.log (type);
};

// get a random meal by country
let getRandomMealByCountry = function() {
    let country = $("#meal-country").val() || [];
    console.log (country);
};

// get a random drink by type
let getRandomDrink = function() {
    let type = $("#drink-type").val() || [];
    console.log (type);
}

// replace the featured movie
let replaceFeaturedMovie = function() {
    
};

// replace the featured meal
let replaceFeaturedMeal = function() {
    
};

// replace the featured drink
let replaceFeaturedDrink = function() {
    
};

// populate featured Movie
let populateFeaturedMovie = function() {

    // call the API using the global featuredMovie variable

    // populate the #title with the .title

    // populate the #tagline with .tagline

    // populate the #poster_path with the .poster_path

    // populate the #vote_average && #runtime with the .vote_average && .runtime && .popularity && .genres 

    // populate the #overview with the .overview

    // populate available streaming services
};

// populate featured Meal
let populateFeaturedMeal = function() {

    // call the API using the global featuredMeal variable

    // populate the #strMealThumb with the .strMealThumb

    // populate the #strMeal with the .strMeal

    // populate the #strCategory with the .strCategory

    // populate the #ingrediants with an .strIngredient[i] for loop

};

// populate featured Drink
let populateFeaturedDrink = function() {

    // call the API using the global featuredDrink variable

    // populate the #strDrinkThumb with the .strDrinkThumb

    // populate the #strDrink with the .strDrink

    // populate the #strIBA with the .strIBA

    // populate the #ingrediants with an .strIngredient[i] for loop

};

// populate the modal with movie details
let movieDetail = function() {
    // make modal visable
    $("#modal").addClass("is-active");

    // call the API using the global featuredMovie variable

    // populate the #modalTitle with the .title

    // populate the #modalImage with the .poster_path

    // populate the #modalDetails with the .vote_average && .runtime && .popularity && .genres 

    // populate the #modalText with the .overview

    // populate the #modalVideo with the .video (if available)
};

// populate the modal with meal details
let mealDetail = function() {
    // make modal visable
    $("#modal").addClass("is-active");

    // call the API using the global featuredMeal variable

    // populate the #modalTitle with the .strMeal

    // populate the #modalImage with the .strMealThumb

    // populate the #modalDetails with an .strIngredient[i] && .strMeasure[i] for loop

    // populate the #modalText with the .strInstructions

    // populate the #modalVideo with the .strYoutube (if available)
};

// populate the modal with drink details
let drinkDetail = function() {
    // make modal visable
    $("#modal").addClass("is-active");

    // call the API using the global featuredDrink variable

    // populate the #modalTitle with the .strDrink

    // populate the #modalImage with the .strDrinkThumb

    // populate the #modalDetails with an .strIngredient[i] && .strMeasure[i] for loop

    // populate the #modalText with the .strInstructions

    // populate the #modalVideo with the .strVideo (if available)
};

// save the current featured values as a date night
let saveCurrentPicks = function() {

};

// save the date nights to local storage
let saveDateNights = function() {

};

// load the date nights from local storage
let loadDateNights = function() {

};

//                //
// event handlers //
//                //

// change arrow to finger to signify click events
$(".link").css('cursor', 'pointer');

// movie detail click event
$("#featured-movie").on("click", movieDetail);

// meal detail click event
$("#featured-meal").on("click", mealDetail);

// drink detail click event
$("#featured-drink").on("click", drinkDetail);

// close modal click event
$("#modal-close").on("click", function(event){
    $("#modal").removeClass("is-active");
});

// replace movie click event
$("#movie-genre-submit").on("click", getRandomMovie);

// replace meal type click event
$("#meal-type-submit").on("click", getRandomMealByType);

// replace meal country click event
$("#meal-country-submit").on("click", getRandomMealByCountry);

// replace drink click event
$("#drink-type-submit").on("click", getRandomDrink);