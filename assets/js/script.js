//                  //
// global variables //
//                  //

// strings that hold the currently featured item ids
let featuredMovie = "";
let featuredMeal = "";
let featuredDrink = "";

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

// get a random movie id by genre
let getRandomMovie = function () {
    // get user genre selection
    let genre = $("#movie-genre").val() || [];

    // set a random value for one of the first 5 pages of results
    let random = Math.floor(Math.random() * 5) + 1;

    // format themoviedb.org api url to select by genre randomly from the 100 most popular results
    let apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=0a6cff8e56d74eb3ed1b51e6620176c1&language=en-US&include_adult=false&include_video=false&with_genres=" + genre + "&vote_count.gte=100&with_original_language=en&page=" + random;

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {

                    // create a random number based on the page results length
                    let randomMovie = Math.floor(Math.random() * data.results.length);

                    // select a random movie from the returned page of results and save it's id to the global featured movie variable
                    featuredMovie = (data.results[randomMovie].id);

                    // pass the movie id to this function to populate the featured movie tile
                    populateFeaturedMovie(featuredMovie);
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from themoviedb.org
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to themoviedb.org");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })

};

// get a random meal id by type
let getRandomMealByType = function() {
    // get user type selection
    let type = $("#meal-type").val() || [];

    let apiUrl = ""
    
    // decide what api url to use based on user input
    if(type === "Any") {
        // use this url for a random meal from any category
        apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    } else {
        // format themealdb.com api url to select by category
        apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + type;
    }

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {

                    // create a random number based on the results length
                    let randomMeal = Math.floor(Math.random() * data.meals.length);

                    // select a random meal from the results and save it's id to the global featuredMeal variable
                    featuredMeal = (data.meals[randomMeal].idMeal);

                    // pass the meal id to this function to populate the featured meal tile
                    populateFeaturedMeal(featuredMeal);
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from themealdb.com
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to themealdb.com");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })

};

// get a random meal id by country
let getRandomMealByCountry = function() {
    // get user country selection
    let country = $("#meal-country").val() || [];
    console.log (country);
        
    let apiUrl = ""
    
    // decide what api url to use based on user input
    if(country === "Any") {
        // use this url for a random meal from any country
        apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    } else {
        // format themealdb.com api url to select by country
        apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country;
    }

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {

                    // create a random number based on the results length
                    let randomMeal = Math.floor(Math.random() * data.meals.length);

                    // select a random meal from the results and save it's id to the global featuredMeal variable
                    featuredMeal = (data.meals[randomMeal].idMeal);

                    // pass the meal id to this function to populate the featured meal tile
                    populateFeaturedMeal(featuredMeal);
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from themealdb.com
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to themealdb.com");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })

};

// get a random drink id by type
let getRandomDrink = function() {
    // get user type selection
    let type = $("#drink-type").val() || [];
        
    let apiUrl = ""
    
    // decide what api url to use based on user input
    if(type === "Any") {
        // use this url for a random drink from any category
        apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    } else {
        // format thecocktaildb.com api url to select by category
        apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + type;
    }

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {

                    // create a random number based on the results length
                    let randomDrink = Math.floor(Math.random() * data.drinks.length);

                    // select a random drink from the results and save it's id to the global featuredDrink variable
                    featuredDrink = (data.drinks[randomDrink].idDrink);

                    // pass the drink id to this function to populate the featured drink tile
                    populateFeaturedDrink(featuredDrink);
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from thecocktaildb.com
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to thecocktaildb.com");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })

};

// populate featured Movie
let populateFeaturedMovie = function(id) {

    console.log("Movie id is " + id);

    // format themoviedb.org api url
    let apiUrl = "https://api.themoviedb.org/3/movie/" + id + "?api_key=0a6cff8e56d74eb3ed1b51e6620176c1"

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    
                    // generate HTML to populate the featured movie section
                    $("#featured-movie").empty().append(`
                        <!-- Movie Poster -->
                        <article class="tile is-child is-6" >
                            <figure class="image is-2by3">
                            <img id="poster_path" src="https://image.tmdb.org/t/p/w500` + data.poster_path +`">
                            </figure>
                        </article>
                        <!-- Movie Info -->
                        <article id="movie-info" class="m-4">
                            <p class="title" id="title">` + data.title + `</p>
                            <p class="subtitle" id="tagline">` + data.tagline + `</p>
                            <p class="block" id="overview">` + data.overview + `</p>
                            <span class="tag is-dark mb-1" id="vote_average">Average Rating: ` + data.vote_average + `</span>
                            <span class="tag is-dark mb-2" id="runtime">Runtime: ` + data.runtime + ` mins</span></br>
                        </article>
                    `);

                    // make a new tag for each item in the movie's genre array
                    data.genres.forEach(genre => $("#movie-info").append(`<span class="tag is-link mb-1 mx-1" id="` + genre.name + `">` + genre.name + `</span>`));

                    $("#movie-info").append(`</br><a href="https://www.imdb.com/title/` + data.imdb_id + `/" target="_blank" class="button is-rounded is-warning mt-2">View on IMDB</a>`);
                    
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from themoviedb.org
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to themoviedb.org");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })
};

// populate featured Meal
let populateFeaturedMeal = function(id) {

    console.log("Meal id is " + id);

    // format themealdb.com api url
    let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    
                    // generate HTML to populate the featured meal section
                    $("#featured-meal").empty().append(`
                        <!-- Meal Image-->
                        <article class="tile is-child is-4" >
                            <figure class="image is-1x1">
                                <img class="is-rounded" id="strMealThumb" src=` + data.meals[0].strMealThumb + `>
                            </figure>
                        </article>
                        <!-- Meal Info-->
                        <article id="meal-info" class="m-4" >
                            <p class="title" id="strMeal">` + data.meals[0].strMeal + `</p>
                            <p class="subtitle mb-2" id="strCategory">` + data.meals[0].strCategory + ` (<span id="strArea">` + data.meals[0].strArea + `</span>)</p>
                            <p class="mb-2 ml-1" id="ingredients">Ingredients</p>
                        </article>
                    `);

                    // make a new tag for each ingredient in the meal
                    for(i = 1; i < 21; i++){
                        // make a string value to pass along the number for the array selector
                        let ingredient = "strIngredient" + i;
                        // make sure the selector isn't empty
                        if( data.meals[0][ingredient] != "" && data.meals[0][ingredient] != null ) {
                            // list the ingredient as a tag in the meal-info article
                            $("#meal-info").append(`<span class="tag is-dark mb-1 mx-1" id="` + ingredient + `">` + data.meals[0][ingredient] + `</span>`);
                        }
                    }
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from themealdb.com
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to themealdb.com");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })
};

// populate featured Drink
let populateFeaturedDrink = function(id) {

    console.log("Drink id is " + id);

    // format thecocktaildb.com api url
    let apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    
                    // generate HTML to populate the featured drink section
                    $("#featured-drink").empty().append(`
                        <!-- Drink Image-->
                        <article class="tile is-child is-4" >
                            <figure class="image is-1x1">
                                <img class="is-rounded" id="strDrinkThumb" src=` + data.drinks[0].strDrinkThumb + `>
                            </figure>
                        </article>
                        <!-- Drink Info-->
                        <article id="drink-info" class="m-4" >
                            <p class="title" id="strDrink">` + data.drinks[0].strDrink + `</p>
                            <p class="subtitle mb-2" id="strCategory">` + data.drinks[0].strCategory + `</p>
                            <p class="mb-2 ml-1" id="ingredients">Ingredients</p>
                        </article>
                    `);

                    // make a new tag for each ingredient in the drink
                    for(i = 1; i < 21; i++){
                        // make a string value to pass along the number for the array selector
                        let ingredient = "strIngredient" + i;
                        // make sure the selector isn't empty
                        if( data.drinks[0][ingredient] != "" && data.drinks[0][ingredient] != null ) {
                            // list the ingredient as a tag in the drink-info article
                            $("#drink-info").append(`<span class="tag is-dark mb-1 mx-1" id="` + ingredient + `">` + data.drinks[0][ingredient] + `</span>`);
                        }
                    }
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from thecocktaildb.com 
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to thecocktaildb.com");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })

};

// populate the modal with movie details
let movieDetail = function(id) {
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
let mealDetail = function(id) {

    // format themealdb.com api url using the global featuredMeal variable
    let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + featuredMeal;

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {
                    
                    // make modal visable
                    $("#modal").addClass("is-active");

                    // generate HTML to populate the featured meal section
                    $("#modalTitle").text(data.meals[0].strMeal);
                    $("#modalMain").empty().append(`
                    <!-- PICTURE -->
                    <figure class="image is-square mb-2">
                        <img id="modalImage" src="` + data.meals[0].strMealThumb + `">
                    </figure>
                    <!-- INGREDIANTS -->
                    <div id="modalDetails" class="field is-grouped is-grouped-multiline">
                    </div>
                    <!-- INSTRUCTIONS -->
                    <div class="notification">
                        <p id="modalText">` + data.meals[0].strInstructions.replace(/(\r\n|\n|\r)/g,"</br>") + `</p>
                    </div>
                    <!-- VIDEO -->
                    <figure class="image is-16by9">
                        <iframe id="modalVideo" class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/` + data.meals[0].strYoutube.substring(32) + `" frameborder="0" allowfullscreen></iframe>
                    </figure>
                    `);

                    // make a new tag for each ingredient in the meal
                    for(i = 1; i < 21; i++){
                        // make a string value to pass along the number for the array selector
                        let ingredient = "strIngredient" + i;
                        let measurement = "strMeasure" + i;
                        // make sure the selector isn't empty
                        if( data.meals[0][ingredient] != "" && data.meals[0][ingredient] != null ) {
                            // list the ingredient as a tag in the modalDetails div
                            $("#modalDetails").append(`
                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-link">` + data.meals[0][measurement] + `</span>
                                    <span class="tag is-dark">` + data.meals[0][ingredient] + `</span>
                                </div>
                            </div>
                            `);
                        }
                    }
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from themealdb.com
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to themealdb.com");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })
};

// populate the modal with drink details
let drinkDetail = function(id) {
    
    // format thecocktaildb.com api url using the global featuredDrink variable
    let apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + featuredDrink;

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
        // if request was successful 
            if (response.ok) {
                response.json().then(function(data) {

                    // make modal visable
                    $("#modal").addClass("is-active");
                    
                    // generate HTML to populate the featured meal section
                    $("#modalTitle").text(data.drinks[0].strDrink);
                    $("#modalMain").empty().append(`
                    <!-- PICTURE -->
                    <figure class="image is-square mb-2">
                        <img id="modalImage" src="` + data.drinks[0].strDrinkThumb + `">
                    </figure>
                    <!-- INGREDIANTS -->
                    <div id="modalDetails" class="field is-grouped is-grouped-multiline">
                    </div>
                    <!-- INSTRUCTIONS -->
                    <div class="notification">
                        <p id="modalText">` + data.drinks[0].strInstructions.replace(/(\r\n|\n|\r)/g,"</br>") + `</p>
                    </div>
                    `);

                    // make a new tag for each ingredient in the drink
                    for(i = 1; i < 21; i++){
                        // make a string value to pass along the number for the array selector
                        let ingredient = "strIngredient" + i;
                        let measurement = "strMeasure" + i;
                        // make sure the selector isn't empty
                        if( data.drinks[0][ingredient] != "" && data.drinks[0][ingredient] != null ) {
                            // list the ingredient as a tag in the modalDetails div
                            $("#modalDetails").append(`
                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-link">` + data.drinks[0][measurement] + `</span>
                                    <span class="tag is-dark">` + data.drinks[0][ingredient] + `</span>
                                </div>
                            </div>
                            `);
                        }
                    }
                });
            // request fails
            } else {
                $("#modal").addClass("is-active");
                $("#modalTitle").text("Error: Unable to complete request");
                $("#modalMain").empty().append(`<p>` + response.status ` ` + response.statusText + `</p>`);
            }
        })  
        // alert user if there is no responce from thecocktaildb.com
        .catch(function(error) {
            $("#modalTitle").text("Unable to connect to thecocktaildb.com");
            $("#modalMain").empty().append(`<p> Please check your connection </p>`);
        })
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

getRandomMovie();
getRandomMealByType();
getRandomDrink();

//                //
// event handlers //
//                //

// change arrow to finger to signify click events
$(".link").css('cursor', 'pointer');

// movie detail click event
// $("#featured-movie").on("click", movieDetail);

// meal detail click event
$("#featured-meal").on("click", mealDetail);

// drink detail click event
$("#featured-drink").on("click", drinkDetail);

// close modal click event
$("#modal-close").on("click", function(){
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