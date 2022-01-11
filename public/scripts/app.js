// Client facing scripts here

$(document).ready(() => {
  const deletePointBtn = $('#delete_point_btn');

  $('#delete_point_btn').submit((e) => {
    e.preventDefault();
    $.post('/maps/pointer/:id');
    // eslint-disable-next-line prefer-arrow-callback
    // $.post('/maps/pointer/:id', (data) => {
    //   console.log(data);
    //   if (data.status === 204 && data.response === 'Successfully deleted') {
    //     console.log('it worked!!');
    //   }
    // });
  });
});
