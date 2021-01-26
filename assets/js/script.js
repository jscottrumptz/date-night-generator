//                  //
// global variables //
//                  //

// strings that hold the currently selected items
let mainMovie = "343611";
let mainMeal = "52772";
let mainDrink = "11007";

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

// populate main Movie
let popMovieMain = function() {

};

// populate main Meal
let popMealMain = function() {

};

// populate main Drink
let popDrinkMain = function() {

};


// populate the modal with movie details
let movieDetail = function() {
    // make modal visable
    $("#modal").addClass("is-active");

    // call the API using the global mainMovie variable

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

    // call the API using the global mainMeal variable

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

    // call the API using the global mainDrink variable

    // populate the #modalTitle with the .strDrink

    // populate the #modalImage with the .strDrinkThumb

    // populate the #modalDetails with an .strIngredient[i] && .strMeasure[i] for loop

    // populate the #modalText with the .strInstructions

    // populate the #modalVideo with the .strVideo (if available)
};

//                //
// event handlers //
//                //

// change arrow to finger to signify click events
$(".link").css('cursor', 'pointer');

// movie detail click event
$("#movie-detail").on("click", movieDetail);

// meal detail click event
$("#meal-detail").on("click", mealDetail);

// drink detail click event
$("#drink-detail").on("click", drinkDetail);

// close modal click event
$("#modal-close").on("click", function(event){
    $("#modal").removeClass("is-active");
});