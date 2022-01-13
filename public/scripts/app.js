// Client facing scripts here
const createSearchResult = function(searchResult) {
  const searchResultElement = `<a href="http://localhost:8080/maps/map/${searchResult.id}" class="search-result">${searchResult.title}</a>`;
  return searchResultElement;
};

const renderSearchResults = function(target,searchResultArray) {
  for (let i = 0; i < Object.keys(searchResultArray).length; i++) {
    let searchResultElement = createSearchResult(searchResultArray[i]);
    target.prepend(searchResultElement);
  }
};
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
  const $searchResultContainer = $('#search-result-container');
  $searchResultContainer.hide();
  $('.search-box').on('keyup',function(event) {
    $searchResultContainer.empty();
    const input = $(this).val();
    if (input !== "") {
      $searchResultContainer.empty();
      $searchResultContainer.slideDown();
      console.log(input);
      $.post('/maps/search',{input},(data) => {
        renderSearchResults($searchResultContainer,data);
      });
    } else if (input === "") {
      $('#search-result-container').hide();
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

  let pin_id;

  // eslint-disable-next-line prefer-arrow-callback
  $('.point_edit').on('click', function(e) {
    // const editBox = $('.edit-form-box');
    const boxID = $(this).data('point_id');
    const infoBox = $(`.point-info_${boxID}`);
    pin_id = boxID;
    const editBox = $(`.box_${boxID}`);
    // const editBox = $(this).closest('.edit-form-box');
    if (editBox.is(':visible')) {
      editBox.slideUp('fast');
      infoBox.slideDown('fast');
    } else {
      editBox.slideDown('fast');
      infoBox.slideUp('fast');
    }
    return pin_id;
  });

  // eslint-disable-next-line prefer-arrow-callback
  $(`.edit_submit`).on('submit', function(e) {
    console.log('edited');
    e.preventDefault();
    const point_id = $(this).data('point_id');
    const formData = $(this).serialize();

    const formTitle = $(`#point_title${point_id}`).val();
    const formDesc = $(`#point_desc${point_id}`).val();
    const formImg = $(`#point_img${point_id}`).val();
    const formLat = $(`#point_lat${point_id}`).val();
    const formLng = $(`#point_lng${point_id}`).val();

    $.post(`/maps/pointer/edit/${point_id}`, formData)
      .then((res) => {
        console.log('form info: ', formTitle, formDesc, formLat, formLng);
        console.log('edited');
        $(`.mapList-title_${point_id}`).text(formTitle);
        $(`.mapList-desc_${point_id}`).text(formDesc);
        $(`.mapList-img_${point_id}`).attr('src', formImg);
        $(`.mapList-lat_${point_id}`).text(formLat);
        $(`.mapList-lng_${point_id}`).text(formLng);

        const boxID = $(this).data('point_id');
        const infoBox = $(`.point-info_${boxID}`);
        pin_id = boxID;
        const editBox = $(`.box_${boxID}`);
        // const editBox = $(this).closest('.edit-form-box');
        if (editBox.is(':visible')) {
          editBox.slideUp('fast');
          infoBox.slideDown('fast');
        } else {
          editBox.slideDown('fast');
          infoBox.slideUp('fast');
        }
      })
      .catch((err) => {
        'error: ', err;
      });
  });

  $('.page-num').on('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
