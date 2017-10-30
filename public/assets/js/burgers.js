$(function() {

  $('#submit').on('click', function(event){
    event.preventDefault();
    var newBurger = {
      burger_name: $('#name').val().trim()
    };
    $.post('/',newBurger).done(function(data){
      location.reload();
    });
  });

  $('.devoured').on('click', '#dev', function(event){
    event.preventDefault();

    $(this).attr('data-newdevoured', true);
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    var newBurger = $(this).data("newburger");

    var newDev = {
      devoured: newDevoured
    };

    $.ajax("/" + id, {
      type: "PUT",
      data: newDev
    }).then(
      function() {
        console.log("hey", newDevoured);
        location.reload();
      }
    );
  });
});
