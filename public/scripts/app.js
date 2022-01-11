// Client facing scripts here

$(document).ready(() => {
  const deletePointBtn = $('#delete_point_btn');

  deletePointBtn.on('submit', (e) => {
    e.preventDefault();
    $.delete('/maps/pointer/:id');
    // $.ajax({
    //   method: 'DELETE',
    //   url: '/maps/pointer/:id',
    // });
  });
  console.log(deletePointBtn);
});
