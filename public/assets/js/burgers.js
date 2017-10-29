$('#submit').on('click', function(event){
  // var id = $(this).data("id");
  // var newBurger = $(this).data("burger_name");
  // var devouredState = $(this).data("devoured");
  event.preventDefault();

  var newBurger = {
    burger_name: $('#name').val().trim()
  };
  $.post('/',newBurger).done(function(data){
    location.reload();
  });
});

$('.devoured').on('click', function(event){
  event.preventDefault();
  console.log('here');

  var newDevoured = {
    devoured: this.devoured = true
  };
  $.post('/',newDevoured).done(function(data){
    location.reload();
  });
});
