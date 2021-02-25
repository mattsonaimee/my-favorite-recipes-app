/* eslint-disable no-undef */

// eslint-disable-next-line no-undef
$(document).ready(function () {
  const imagesPreview = function (input, placeToInsertImagePreview) {
    if (input.files) {
      const filesAmount = input.files.length;
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-unmodified-loop-condition
      for (i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = function (event) {
          $($.parseHTML('<img>'))
            .attr('src', event.target.result)
            .appendTo(placeToInsertImagePreview);
        };
        reader.readAsDataURL(input.files[i]);
      }
    }
  };
  $('#input-files').on('click', function () {
    console.log('clicked');
    imagesPreview(this, 'div.preview-images');
  });
});
