// Client facing scripts here
$(document).ready(function() {
  $('.heart-button').on('click',function() {
    const map_id = $(this).attr('data-map-id');
    console.log(map_id);
    if ($(this).hasClass('fa-heart-fav')) {
      $(this).removeClass('fa-heart-fav')

    } else {
      $(this).addClass('fa-heart-fav')
      $.ajax({
        url:"http://localhost:8080/users/favourites",
        method:"POST",
        data:{map_id:map_id}
      })
        .then(function(data) {

        });

    }
  });


});


