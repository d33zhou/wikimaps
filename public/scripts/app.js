// Client facing scripts here

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
