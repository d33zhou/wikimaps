// Client facing scripts here
$(document).ready(function() {
  $('.heart-button').on('click',function() {
    const map_id = $(this).attr('data-map-id');
    console.log(map_id);
    const icon = $(this).find('i')
    if (icon.hasClass('fa-heart-fav')) {
      icon.removeClass('fa-heart-fav');
      console.log('trying to remove class');
    } else {
      icon.addClass('fa-heart-fav');
      console.log('trying to add class');
      $.ajax({
        url:"http://localhost:8080/users/favourites",
        method:"POST",
        data:{map_id:map_id}
      })
        .then(function(data) {
          console.log(data);
        });

    }
  });


});


