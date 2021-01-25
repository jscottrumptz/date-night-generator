

// event handlers
$("#meal-detail").css('cursor', 'pointer');

$("#meal-detail").on("click", function(event){
    $("#modal").addClass("is-active");
});

$("#modal-close").on("click", function(event){
    $("#modal").removeClass("is-active");
});