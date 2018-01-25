

// When the page loads, grab and display all of our burgers
$(document).ready(function(){

    function getBurgers() {
    $(".burgers").remove();
    $("#btnBox").empty();

    $.ajax("/",{
      type: "GET"
    }).then(function(data){
            console.log("Hi")
           // for (var i = 0; i < allburgers.length; i++) {
           //  var burger = $("<div>");
           //  burger.addClass("burgers");
           //  burger.data("id", data[i].id);
           //  burger.data("devoured", data[i].devoured);
           //  burger.html(data[i].burger_name);
           //  burger.append("<button>Devour It</button>");

           //  if (burger.data("devoured") === 0) {
           //    $("#eatenBurgers").append(burger);
           //  }

           //  $("#wholeBurgers").append(burger);
          // }
    });

   }
    
  getBurgers();

  $("#addBurger").on("click", function(event){

    var newBurger = {
      burger_name: $("#burger").val().trim()
    };

    $("#burger").val("");

    $.ajax("/new",{
      type: "POST",
      data: newBurger,
    }).then(function(data){
        getBurgers();
    });
  
  });
})
  



  


