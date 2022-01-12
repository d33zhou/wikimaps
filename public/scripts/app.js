// Client facing scripts here
$(document).ready(() => {
  $('.heart-button').on('click', function() {
    const map_id = $(this).attr('data-map-id');
    const user_id = $(this).attr('data-user-id');
    console.log(map_id);
    const icon = $(this).find('i');
    if (icon.hasClass('fa-heart-fav') && user_id) {
      icon.removeClass('fa-heart-fav');
      console.log('trying to remove class');
      $.post("http://localhost:8080/users/favourites/delete", { map_id }, (data, status) => {
        console.log("deleting record inside post", data);
      });
    } else if (user_id) {
      icon.addClass('fa-heart-fav');
      console.log('trying to add class');
      $.ajax({
        url: "http://localhost:8080/users/favourites",
        method: "POST",
        data: { map_id },
      })
        .then((data) => {
          console.log("adding record", data);
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
    // console.log(point_id);
    $.post(`/maps/pointer/${point_id}`)
      .then((res) => {
        // console.log(res);
        // console.log('POINTCARD', point_card);
        point_card.remove();
      });
  });

  // eslint-disable-next-line prefer-arrow-callback
  $('.edit_submit').on('submit', function(e) {
    console.log('edited');
    e.preventDefault();

    $.post(`/maps/pointer/edit/${point_id}`)
      .then((res) => {
        console.log('edited');
      });
  });
});
