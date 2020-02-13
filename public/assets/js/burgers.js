$(function() {
  $("#addBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // [name=plan] will find an element with a "name" attribute equal to the string "burger"
    var newBurger = {
      burger: $("#addBurger [name=burger]")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("added New Burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".devour").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("click");
    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $(this).data("burgerid");
    console.log(id);
    let newState = {
      devoured: "true"
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("updated id ", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
