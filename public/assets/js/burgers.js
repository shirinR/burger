$('#submit').on('click', function(event){
  // var id = $(this).data("id");
  // var newBurger = $(this).data("burger_name");
  // var devouredState = $(this).data("devoured");
  event.preventDefault();

  var newBurger = {
    burger_name: $('#textarea').val().trim(),
    devoured: $(this).data("devoured")
  };

  $.post('/api/burgers',newBurger).done(function(data){
    location.reload();
  });
});
