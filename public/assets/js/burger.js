$(function () {
    $("#burgerDev").on("click", function () {

        const id = $(this).data("id");
        console.log($(this));
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



    $(".create-form").on("submit", function (event) {
        event.preventDefault();


        let newBurger = {
            burger_name: $("#burgerForm").val().trim(),
            devoured: 0
        };



        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("New burger has beeen created.");
            // location.reload();
        });


    });
});