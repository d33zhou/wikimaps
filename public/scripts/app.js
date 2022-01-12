// Client facing scripts here
$(document).ready(function() {

  // hide error-message on page-load
  $('.error-message').hide();
  $('.error-message-1').hide();

  $('.heart-button').on('click',function() {
    const map_id = $(this).attr('data-map-id');
    const user_id = $(this).attr('data-user-id');
    console.log(map_id);
    const icon = $(this).find('i');
    // if user is logged in and the map is in favourites
    if (icon.hasClass('fa-heart-fav') && user_id) {
      icon.removeClass('fa-heart-fav');
      console.log('trying to remove class');
      $.post("http://localhost:8080/users/favourites/delete",{map_id:map_id},function(data,status) {
        console.log("deleting record inside post",data);
      });
      // if user is logged in and the map is not in favourites
    } else if (user_id) {
      icon.addClass('fa-heart-fav');
      console.log('trying to add class');
      $.ajax({
        url:"http://localhost:8080/users/favourites",
        method:"POST",
        data:{map_id:map_id}
      })
        .then(function(data) {
          console.log("adding record",data);
        });
      // if user is not logged in
    } else {
      $('.error-message').hide('fast','swing');
      $('.error-message').slideDown('fast','swing');
    }
  });
  $("#maps-favourites").on('click',function(event) {
    const user_id = $("#maps-favourites").attr('data-user-id');
    console.log(user_id);
    if (!user_id) {
      event.preventDefault();
      console.log('Clicked!');
      $('.error-message-1').hide('fast','swing');
      $('.error-message-1').slideDown('fast','swing');
    } else {
      $.get("http://localhost:8080/users/favourites",function() {
        console.log("getting favourites page");
      });
    }
  });
  $("#maps-contributions").on('click',function(event) {
    const user_id = $("#maps-contributions").attr('data-user-id');
    console.log(user_id);
    if (!user_id) {
      event.preventDefault();
      console.log('Clicked!');
      $('.error-message-1').hide('fast','swing');
      $('.error-message-1').slideDown('fast','swing');
    } else {
      $.get("http://localhost:8080/users/contributions",function() {
      });
    }
  });
  $("#maps-creation").on('click',function(event) {
    const user_id = $("#maps-creation").attr('data-user-id');
    console.log(user_id);
    if (!user_id) {
      event.preventDefault();
      console.log('Clicked!');
      $('.error-message-1').hide('fast','swing');
      $('.error-message-1').slideDown('fast','swing');
    } else {
      $.get("http://localhost:8080/mpas/create",function() {
      });
    }
  });
});


$(document).ready(() => {
  $('.point_delete').on('click', function(e) {
    // e.preventDefault();
    // console.log($(this));
    const point_id = $(this).data('point_id');
    const point_card = $(this).closest('.mapList-box');
    console.log(point_id);
    $.post(`/maps/pointer/${point_id}`)
      .then((res) => {
        console.log(res);
        console.log('POINTCARD', point_card);
        point_card.remove();
      });
  });
});
