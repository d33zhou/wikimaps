// Client facing scripts here
$(document).ready(function() {
  for (let i = 0; i <= 2; i++) {
    $(`.heart-button-${[i]}`).on("click",function() {
      $(`#heart-${i}.fa-heart`).addClass('fa-heart-click');
    });
  }
});


