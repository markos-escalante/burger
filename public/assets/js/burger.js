$(".burgerDev").on("click",  function() {

    const id = $(this).data("id");
    
    const devour = {
        devoured: true
    };


    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devour
    }).then(() => {
        console.log("Burger devoured!");
        location.reload();
    });
});



$("#createburger").on("submit", function(event) {
    event.preventDefault();


    let newBurger = {
        burger_name: $("#textbox").val().trim(),
        devoured: 0
    };



    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then( () => {
        console.log("New burger has beeen created.");
        location.reload();
    });


});